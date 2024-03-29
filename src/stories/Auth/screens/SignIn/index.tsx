import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { styles } from './styles';
import { Button, TextInput } from '@components';
import { Logo } from '@assets/icons';
import {
  SignInDefaultValues,
  SignInValidator,
  SignInValidatorType,
} from './validator';
import { useForm, Controller } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslation } from '@hooks';

export const SignIn: React.FC = () => {
  const t = useTranslation();
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

  const onSubmit = (data: SignInValidatorType) => {
    console.log(data);
  };

  return (
    <SafeAreaView style={styles.root}>
      <Logo width={200} height={200} />
      <View style={styles.inputContainer}>
        <Controller
          control={control}
          name="email"
          render={({ field }) => (
            <TextInput
              style={styles.input}
              placeholder={'signIn.email'}
              onChangeText={field.onChange}
              autoCapitalize="none"
              keyboardType="email-address"
              value={field.value}
              error={errors.email?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <TextInput
              style={styles.input}
              secureTextEntry
              placeholder={'signIn.password'}
              onChangeText={field.onChange}
              value={field.value}
              error={errors.password?.message}
            />
          )}
        />
      </View>
      <Button.Large label={'signIn.signIn'} onPress={handleSubmit(onSubmit)} />
      <Text style={styles.signUpContainer}>
        <Text>{t('signIn.dontHaveAccount')}</Text>
        <Text style={styles.signUp}>{t('signIn.signUp')}</Text>
      </Text>
    </SafeAreaView>
  );
};
