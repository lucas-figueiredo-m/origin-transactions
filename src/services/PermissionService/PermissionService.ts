import {
  request,
  check,
  type PermissionStatus,
  type Permission as DevicePermission,
  RESULTS,
} from 'react-native-permissions';
import { PermissionResult, Scopes } from './PermissionService.type';
import { MobileDevice, PermissionScopes } from './PermissionService.constant';

export class Permission {
  private static status(
    status: PermissionStatus,
    isRequesting: boolean,
  ): PermissionResult {
    if (status === RESULTS.GRANTED || status === RESULTS.LIMITED) {
      return {
        grant: true,
        status,
        message: '',
        askOpenSettings: false,
        unknownError: false,
      };
    }

    if (status === RESULTS.DENIED && !isRequesting) {
      return {
        grant: false,
        status,
        message: '',
        askOpenSettings: false,
        unknownError: false,
      };
    }

    if (status === RESULTS.DENIED && isRequesting) {
      return {
        grant: false,
        status,
        message: 'permissionService.requesting',
        askOpenSettings: false,
        unknownError: false,
      };
    }

    if (status === RESULTS.BLOCKED) {
      return {
        grant: false,
        status,
        message: 'permissionService.blockedMessage',
        askOpenSettings: true,
        unknownError: false,
      };
    }

    if (status === RESULTS.UNAVAILABLE) {
      return {
        grant: false,
        status,
        message: 'permissionService.unavailable',
        askOpenSettings: false,
        unknownError: false,
      };
    }

    return {
      grant: false,
      status,
      message: 'permissionService.notPossible',
      askOpenSettings: false,
      unknownError: false,
    };
  }

  private static async checkPermission(
    permission: DevicePermission,
  ): Promise<PermissionResult> {
    try {
      const status = await check(permission);
      return this.status(status, false);
    } catch (err) {
      const error: PermissionResult = {
        message: 'permissionService.unknownError',
        askOpenSettings: false,
        grant: false,
        unknownError: true,
        status: null,
      };
      return error;
    }
  }

  private static async request(
    permission: DevicePermission,
  ): Promise<PermissionResult> {
    try {
      const status = await request(permission);
      return this.status(status, true);
    } catch (err) {
      const error: PermissionResult = {
        message: 'permissionService.unknownError',
        askOpenSettings: false,
        grant: false,
        unknownError: true,
        status: null,
      };
      return error;
    }
  }

  public static async check(scope: Scopes): Promise<PermissionResult> {
    const scopeValue = PermissionScopes[MobileDevice][scope];

    const hasPermission = await this.checkPermission(scopeValue);

    return hasPermission;
  }

  public static async get(scope: Scopes): Promise<PermissionResult> {
    const scopeValue = PermissionScopes[MobileDevice][scope];
    const hasPermission = await this.checkPermission(scopeValue);

    if (hasPermission.grant) {
      return hasPermission;
    }

    const getPermission = await this.request(scopeValue);

    return getPermission;
  }
}
