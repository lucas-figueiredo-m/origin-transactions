import { usePermissions, useToast } from '@hooks';
import {
  TransactionStackNavigationParams,
  TransactionStackRoutes,
  TransactionStackRouteParams,
} from '@navigators';
import Geolocation from '@react-native-community/geolocation';
import { useRoute, useNavigation } from '@react-navigation/native';
import { Scopes } from '@services';
import { useChangeTransactionCoordinatesMutation } from '@store';
import { useEffect, useMemo, useState } from 'react';
import { LatLng, Region } from 'react-native-maps';

type TransactionMapPickerNavigation =
  TransactionStackNavigationParams<TransactionStackRoutes.TransactionMapPicker>;

type TransactionMapPickerRoute =
  TransactionStackRouteParams<TransactionStackRoutes.TransactionMapPicker>;

const initialRegion: Region = {
  latitude: 37.78825,
  longitude: -122.4324,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

export const useMapPicker = () => {
  const [granted, request] = usePermissions(Scopes.GPS);
  const [area, setArea] = useState<Region>(initialRegion);
  const [mutate, { isLoading }] = useChangeTransactionCoordinatesMutation();
  const { params } = useRoute<TransactionMapPickerRoute>();
  const { popToTop } = useNavigation<TransactionMapPickerNavigation>();

  const Toast = useToast();

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
      Toast.ShowSuccess('transactionMapPicker.success');
      popToTop();
    } catch (error) {
      Toast.ShowError('transactionMapPicker.errorMessage');
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

  return {
    area,
    isLoading,
    onRegionChange,
    onSavePress,
    markerLocation,
  };
};
