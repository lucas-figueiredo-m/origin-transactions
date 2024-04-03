import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Alert, SafeAreaView } from 'react-native';
import MapView, { LatLng, Marker, Region } from 'react-native-maps';
import { styles } from './styles';
import { usePermissions, useTranslation } from '@hooks';
import { Scopes } from '@services';
import Geolocation from '@react-native-community/geolocation';
import { Button } from '@components';
import { useChangeTransactionCoordinatesMutation } from '@store';
import {
  TransactionStackNavigationParams,
  TransactionStackRouteParams,
  TransactionStackRoutes,
} from '@navigators';
import { useNavigation, useRoute } from '@react-navigation/native';

const initialRegion: Region = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

type TransactionMapPickerNavigation =
  TransactionStackNavigationParams<TransactionStackRoutes.TransactionMapPicker>;

type TransactionMapPickerRoute =
  TransactionStackRouteParams<TransactionStackRoutes.TransactionMapPicker>;

export const TransactionMapPicker: React.FC = () => {
  const mapRef = useRef<MapView>(null);
  const [granted, request] = usePermissions(Scopes.GPS);
  const [area, setArea] = useState<Region>(initialRegion);
  const [mutate, { isLoading }] = useChangeTransactionCoordinatesMutation();
  const { params } = useRoute<TransactionMapPickerRoute>();
  const { popToTop } = useNavigation<TransactionMapPickerNavigation>();
  const t = useTranslation();

  useEffect(() => {
    if (granted) {
      Geolocation.getCurrentPosition(({ coords }) => {
        const { latitude, longitude } = coords;
        setArea({
          latitude,
          longitude,
          latitudeDelta: 0.02,
          longitudeDelta: 0.02,
        });
      });
    } else {
      request();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onSavePress = async () => {
    try {
      const { latitude: Lat, longitude: Lon } = area;
      await mutate({ Lat, Lon, id: params.id });
      popToTop();
    } catch (error) {
      Alert.alert(
        t('transactionMapPicker.error'),
        t('transactionMapPicker.errorMessage'),
      );
    }
  };

  const onRegionChange = (region: Region) => {
    setArea(region);
  };

  const markerLocation: LatLng = useMemo(
    () => ({
      latitude: area.latitude,
      longitude: area.longitude,
    }),
    [area],
  );

  return (
    <SafeAreaView style={styles.root}>
      <MapView
        ref={mapRef}
        region={area}
        onRegionChange={onRegionChange}
        style={styles.map}
      >
        <Marker coordinate={markerLocation} />
      </MapView>
      <SafeAreaView style={styles.buttonContainer}>
        <Button.Large
          loading={isLoading}
          label={'Save'}
          onPress={onSavePress}
        />
      </SafeAreaView>
    </SafeAreaView>
  );
};
