import { PermissionResult, PermissionService } from '@services';
import { useCallback, useEffect, useState } from 'react';
import { Alert, Linking } from 'react-native';
import { useTranslation } from '../useTranslation';
import { UsePermission } from './usePermissions.type';

export const usePermissions: UsePermission = scope => {
  const [granted, setGranted] = useState<boolean>(false);
  const t = useTranslation();

  const checkPermission = useCallback(async () => {
    const result = await PermissionService.get(scope);
    setGranted(result.grant);
  }, [scope]);

  useEffect(() => {
    checkPermission();
  }, [checkPermission]);

  const requestPermission = async () => {
    const result = await PermissionService.get(scope);

    handlePermissionResult(result);
  };

  const handlePermissionBlocked = (message: string) => {
    setGranted(false);
    return Alert.alert(t('usePermissions.attention'), t(message), [
      {
        text: t('usePermissions.openSettings'),
        onPress: () => Linking.openSettings(),
      },
      {
        text: t('usePermissions.cancel'),
        style: 'cancel',
      },
    ]);
  };

  const handlePermissionDenied = async () => {
    setGranted(false);
    const result = await PermissionService.get(scope);

    await handlePermissionResult(result);
  };

  const handlePermissionGranted = () => {
    setGranted(true);
  };

  const handlePermissionResult = async (result: PermissionResult) => {
    const { grant, askOpenSettings, message } = result;

    if (!grant && askOpenSettings) {
      handlePermissionBlocked(message);
      return;
    }

    if (!grant && !askOpenSettings) {
      handlePermissionDenied();
      return;
    }

    handlePermissionGranted();
  };

  const request = () => {
    requestPermission();
  };

  return [granted, request];
};
