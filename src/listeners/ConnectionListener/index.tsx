import { useToast } from '@hooks';
import { useNetInfo } from '@react-native-community/netinfo';
import React, { useEffect, useState } from 'react';

export const ConnectionListener = () => {
  const { isConnected: isConnectedNetInfo } = useNetInfo();
  const isConnected = isConnectedNetInfo ?? true;

  const [isPrevConnected, setIsPrevConnected] = useState<boolean | null>(
    isConnected ?? true,
  );

  const Toast = useToast();

  useEffect(() => {
    if (isConnected && isConnected !== isPrevConnected) {
      setIsPrevConnected(isConnected);
      Toast.WifiOn();
    } else if (!isConnected && isConnected !== isPrevConnected) {
      setIsPrevConnected(isConnected);
      Toast.WifiOff();
    }
  }, [isConnected, isPrevConnected, Toast]);

  return <></>;
};
