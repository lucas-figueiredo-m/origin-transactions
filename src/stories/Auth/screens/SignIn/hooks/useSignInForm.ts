import {
  SignInDefaultValues,
  SignInValidator,
  SignInValidatorType,
} from '../validator';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthService } from '@services';
import { useState } from 'react';
import {
  AuthStackNavigationParams,
  AuthStackRoutes,
  MainStackRoutes,
  TabRoutes,
} from '@navigators';
import { useNavigation } from '@react-navigation/native';

type SignInNavigation = AuthStackNavigationParams<AuthStackRoutes.SignIn>;

export const useSignInForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignInValidatorType>({
    defaultValues: SignInDefaultValues,
    resolver: zodResolver(SignInValidator),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  const [loading, setLoading] = useState(false);
  const { reset } = useNavigation<SignInNavigation>();

  const onSubmit = async (data: SignInValidatorType) => {
    setLoading(true);
    try {
      await AuthService.signIn(data.email, data.password);
      reset({
        index: 0,
        routes: [
          {
            name: MainStackRoutes.TabNavigator,
            params: { screen: TabRoutes.TransactionsList },
          },
        ],
      });
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const onSignInPress = handleSubmit(onSubmit);

  return {
    onSignInPress,
    control,
    errors,
    loading,
  };
};
