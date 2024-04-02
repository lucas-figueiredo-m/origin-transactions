import { Transaction } from '@store';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import { ChevronRight } from '@assets/icons';
import { Colors } from '@theme';
import { StringUtils } from '@utils';
import { format } from 'date-fns';
import { LeftBarColor } from './TransactionCard.constant';
import { useTranslation } from '@hooks';

type TransactionCardProps = {
  data: Transaction;
  onPress?: () => void;
};

export const TransactionCard: React.FC<TransactionCardProps> = ({
  data,
  onPress,
}) => {
  const leftBarColor = LeftBarColor[data.Type] ?? Colors.Primary;
  const t = useTranslation();

  return (
    <TouchableOpacity onPress={onPress} style={styles.root}>
      <View style={[styles.leftBar, { backgroundColor: leftBarColor }]} />
      <View style={styles.content}>
        <View style={styles.leftContainer}>
          <Text numberOfLines={1} style={styles.vendor}>
            {data.Vendor}
          </Text>
          <Text style={styles.category}>
            {StringUtils.toCapitalizeWords(data.Category)}
          </Text>
          <Text style={styles.type}>
            {StringUtils.toCapitalizeWords(data.Type)}{' '}
            {t('transactions.transactionCard.on')}{' '}
            {format(data.Date, 'MMM do, yyyy')}
          </Text>
        </View>
        <View style={styles.rightContainer}>
          {/* // TODO: process Amount data to fit money format */}
          <Text style={styles.amount}>U$ {data.Amount}</Text>
          <ChevronRight width={32} height={32} color={Colors.Grey} />
        </View>
      </View>
    </TouchableOpacity>
  );
};
