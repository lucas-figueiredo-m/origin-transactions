import { NavigatorScreenParams } from '@react-navigation/native';
import { MainStackRoutes } from './MainStack.enum';
import { AuthStackParamList } from '../AuthStack';

export type MainStackParamList = {
  [MainStackRoutes.AuthStack]: NavigatorScreenParams<AuthStackParamList>;
};
