import React from 'react';
import { SvgProps } from 'react-native-svg';
import { TabBarIconProps } from '..';

export const withTabIcon = (
  Icon: React.FC<SvgProps>,
): React.FC<TabBarIconProps> => {
  return (props: TabBarIconProps) => (
    <Icon color={props.color} width={props.size} height={props.size} />
  );
};
