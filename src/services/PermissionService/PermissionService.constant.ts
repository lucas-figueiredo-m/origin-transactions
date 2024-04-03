import { PERMISSIONS } from 'react-native-permissions';

import { Platform } from 'react-native';
import { PermissionScopeType } from '.';

export const MobileDevice = Platform.OS === 'ios' ? 'ios' : 'android';

export const PermissionScopes: PermissionScopeType = {
  ios: {
    Camera: PERMISSIONS.IOS.CAMERA,
    GPS: PERMISSIONS.IOS.LOCATION_WHEN_IN_USE,
    IMAGE: PERMISSIONS.IOS.PHOTO_LIBRARY,
  },
  android: {
    Camera: PERMISSIONS.ANDROID.CAMERA,
    GPS: PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,
    IMAGE: PERMISSIONS.ANDROID.READ_MEDIA_IMAGES,
  },
};
