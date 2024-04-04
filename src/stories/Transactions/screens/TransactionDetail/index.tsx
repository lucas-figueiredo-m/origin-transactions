import {
  TransactionStackNavigationParams,
  TransactionStackRouteParams,
  TransactionStackRoutes,
} from '@navigators';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useGetTransactionDetailsQuery } from '@store';
import React, { useEffect, useRef } from 'react';
import { TouchableOpacity, View, useWindowDimensions } from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';
import { styles } from './styles';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { FileText, MapPin } from '@assets/icons';
import { StringUtils } from '@utils';
import { format } from 'date-fns';
import { useTranslation } from '@hooks';
import {
  TransactionButton,
  TransactionHeader,
  TransactionText,
} from './components';
import { Screen } from '@components';
import { useNetInfo } from '@react-native-community/netinfo';

type TransactionDetailRoute =
  TransactionStackRouteParams<TransactionStackRoutes.TransactionDetails>;

type TransactionDetailNavigation =
  TransactionStackNavigationParams<TransactionStackRoutes.TransactionDetails>;

export const TransactionDetail: React.FC = () => {
  const { params } = useRoute<TransactionDetailRoute>();
  const { navigate } = useNavigation<TransactionDetailNavigation>();
  const { height } = useWindowDimensions();
  const mapRef = useRef<MapView>(null);
  const { data, isFetching, isError, refetch } = useGetTransactionDetailsQuery(
    params.id,
  );
  const { isConnected } = useNetInfo();
  const translation = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translation.value }],
    };
  });

  useEffect(() => {
    if (isError && isConnected) {
      refetch();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const t = useTranslation();

  const onMapPress = () => {
    translation.value = withSpring(height * 0.6, { damping: 50, mass: 10 });
    mapRef.current?.animateToRegion(targetRegion, 1000);
  };

  const onChevronPress = () => {
    translation.value = withSpring(0, { damping: 50, mass: 10 });
    mapRef.current?.animateToRegion(initialRegion, 1000);
  };

  const initialRegion: Region = {
    latitude: (data?.Lat || 0) - 0.008,
    longitude: data?.Lon || 0,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  };

  const targetRegion: Region = {
    latitude: (data?.Lat || 0) - 0.002,
    longitude: data?.Lon || 0,
    latitudeDelta: 0.02,
    longitudeDelta: 0.02,
  };

  return (
    <Screen
      loading={isFetching}
      isError={isError}
      errorMessage={'transactionDetail.error'}
    >
      {data && (
        <View>
          <TouchableOpacity style={styles.map} onPress={onMapPress}>
            <MapView
              ref={mapRef}
              initialRegion={initialRegion}
              style={styles.map}
            >
              <Marker
                coordinate={{ latitude: data.Lat, longitude: data.Lon }}
              />
            </MapView>
          </TouchableOpacity>
          <Animated.View style={[styles.content, animatedStyle]}>
            <TransactionHeader
              translation={translation}
              onChevronPress={onChevronPress}
            />
            <View style={styles.textsContainer}>
              <TransactionText
                title={data.Vendor}
                content={format(data.Date, 'MMM do, yyyy')}
                titleStyle={styles.vendor}
                contentStyle={styles.date}
              />

              <TransactionText
                title={'transactionDetail.amount'}
                content={`U$ ${data.Amount}`}
                titleStyle={styles.sectionTitle}
                contentStyle={styles.amount}
              />

              <TransactionText
                title={'transactionDetail.category'}
                content={StringUtils.toCapitalizeWords(data.Category)}
                titleStyle={styles.sectionTitle}
                contentStyle={styles.category}
              />

              <TransactionText
                title={'transactionDetail.transactionType'}
                content={StringUtils.toCapitalizeWords(data.Type)}
                titleStyle={styles.sectionTitle}
                contentStyle={styles.type}
              />

              <TransactionButton
                Icon={MapPin}
                label={t('transactionDetail.attachGps')}
                onPress={() =>
                  navigate(TransactionStackRoutes.TransactionChangeCoords, {
                    id: data.Id,
                  })
                }
              />

              <TransactionButton
                Icon={FileText}
                label={t('transactionDetail.seeReceipt')}
                onPress={() =>
                  navigate(TransactionStackRoutes.TransactionReceipt, {
                    receiptUrl: data.ReceiptImage,
                    id: data.Id,
                  })
                }
              />
            </View>
          </Animated.View>
        </View>
      )}
    </Screen>
  );
};
