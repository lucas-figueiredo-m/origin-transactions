import {
  SignInDefaultValues,
  SignInValidator,
  SignInValidatorType,
} from '../validator';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthService } from '@services';
import { useState } from 'react';

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

  const onSubmit = async (data: SignInValidatorType) => {
    setLoading(true);
    try {
      const user = await AuthService.signIn(data.email, data.password);
      console.log(user);
      console.log('User signed in!');
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
