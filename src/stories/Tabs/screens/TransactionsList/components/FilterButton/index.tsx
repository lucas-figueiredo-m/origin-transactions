import { useTranslation } from '@hooks';
import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { styles } from './styles';
import { Filter } from '@assets/icons';
import { Colors } from '@theme';

type FilterButtonProps = {
  onPress?: () => void;
  isFilterActive: boolean;
};

export const FilterButton: React.FC<FilterButtonProps> = ({
  onPress,
  isFilterActive,
}) => {
  const t = useTranslation();

  const text = isFilterActive
    ? t('transactions.filterActive')
    : t('transactions.filter');

  return (
    <TouchableOpacity
      onPress={onPress}
      style={isFilterActive ? styles.filterActive : styles.filter}
    >
      <Filter
        width={16}
        height={16}
        color={isFilterActive ? Colors.White : Colors.Grey}
      />
      <Text style={isFilterActive ? styles.activeText : styles.text}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
