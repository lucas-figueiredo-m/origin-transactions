import {
  TransactionStackNavigationParams,
  TransactionStackRouteParams,
  TransactionStackRoutes,
} from '@navigators';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useGetTransactionDetailsQuery } from '@store';
import { Colors } from '@theme';
import React, { useRef } from 'react';
import {
  ActivityIndicator,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import MapView, { Marker, Region } from 'react-native-maps';
import { styles } from './styles';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { Compass, FileText } from '@assets/icons';
import { StringUtils } from '@utils';
import { format } from 'date-fns';
import { useTranslation } from '@hooks';
import {
  TransactionButton,
  TransactionHeader,
  TransactionText,
} from './components';

type TransactionDetailRoute =
  TransactionStackRouteParams<TransactionStackRoutes.TransactionDetails>;

type TransactionDetailNavigation =
  TransactionStackNavigationParams<TransactionStackRoutes.TransactionDetails>;

export const TransactionDetail: React.FC = () => {
  const { params } = useRoute<TransactionDetailRoute>();
  const { navigate } = useNavigation<TransactionDetailNavigation>();
  const { height } = useWindowDimensions();
  const mapRef = useRef<MapView>(null);
  const { data, isFetching, isError } = useGetTransactionDetailsQuery(
    params.id,
  );
  const translation = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateY: translation.value }],
    };
  });

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
    <View style={styles.root}>
      {isFetching ? (
        <ActivityIndicator size={'large'} color={Colors.Primary} />
      ) : isError ? (
        <View>
          <Text>{t('transactionDetail.error')}</Text>
        </View>
      ) : (
        data && (
          <View>
            <TouchableOpacity style={styles.map} onPress={onMapPress}>
              <MapView
                ref={mapRef}
                initialRegion={initialRegion}
                style={styles.map}>
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
                  Icon={Compass}
                  label={t('transactionDetail.attachGps')}
                />

                <TransactionButton
                  Icon={FileText}
                  label={t('transactionDetail.seeReceipt')}
                  onPress={() =>
                    navigate(TransactionStackRoutes.TransactionReceipt, {
                      receiptUrl: data.ReceiptImage,
                    })
                  }
                />
              </View>
            </Animated.View>
          </View>
        )
      )}
    </View>
  );
};
