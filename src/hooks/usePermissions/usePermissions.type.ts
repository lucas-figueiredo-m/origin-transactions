import { Scopes } from '@services';

export type UsePermission = (scope: Scopes) => [boolean, () => void];
