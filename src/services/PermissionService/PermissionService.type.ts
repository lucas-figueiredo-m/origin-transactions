import {
  AndroidPermission,
  IOSPermission,
  PermissionStatus,
} from 'react-native-permissions';
import { Platform } from 'react-native';
import { Scopes } from './PermissionService.enum';

export type MobilePlatforms = Exclude<
  typeof Platform.OS,
  'windows' | 'macos' | 'web'
>;

export type PermissionResult =
  | {
      grant: boolean;
      status: PermissionStatus;
      unknownError: false;
      message: string;
      askOpenSettings: boolean;
    }
  | {
      grant: boolean;
      status: null;
      unknownError: true;
      message: string;
      askOpenSettings: boolean;
    };

export type PermissionScopeType = {
  ios: {
    [key in Scopes]: IOSPermission;
  };
  android: {
    [key in Scopes]: AndroidPermission;
  };
};
