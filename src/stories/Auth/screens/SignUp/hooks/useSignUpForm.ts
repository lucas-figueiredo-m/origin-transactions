import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { AuthService } from '@services';
import { useState } from 'react';
import {
  SignUpDefaultValues,
  SignUpValidator,
  SignUpValidatorType,
} from '../validator';

export const useSignUpForm = () => {
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<SignUpValidatorType>({
    defaultValues: SignUpDefaultValues,
    resolver: zodResolver(SignUpValidator),
    mode: 'onBlur',
    reValidateMode: 'onChange',
  });

  console.log(errors.confirmPassword);

  const [loading, setLoading] = useState(false);

  const onSubmit = async (data: SignUpValidatorType) => {
    setLoading(true);
    try {
      const user = await AuthService.signUp(data.email, data.password);
      console.log(user);
      console.log('User signed in!');
    } catch (error) {
    } finally {
      setLoading(false);
    }
  };

  const onSignUpPress = handleSubmit(onSubmit);

  return {
    onSignUpPress,
    control,
    errors,
    loading,
  };
};
