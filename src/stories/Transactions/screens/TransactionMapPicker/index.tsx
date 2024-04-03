import React from 'react';
import { SafeAreaView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { styles } from './styles';

import { Button } from '@components';

import { useMapPicker } from './hooks';

export const TransactionMapPicker: React.FC = () => {
  const { area, onRegionChange, onSavePress, markerLocation, isLoading } =
    useMapPicker();

  return (
    <SafeAreaView style={styles.root}>
      <MapView region={area} onRegionChange={onRegionChange} style={styles.map}>
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
