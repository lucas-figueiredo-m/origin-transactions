import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { styles } from './styles';
import { Button, TextInput } from '@components';
import { Logo } from '@assets/icons';
import { SignInValidatorType } from './validator';
import { Controller } from 'react-hook-form';
import { useTranslation } from '@hooks';

import { useSignInForm } from './hooks';
import { AuthService } from '@services';

export const SignIn: React.FC = () => {
  const t = useTranslation();
  const { handleSubmit, control, errors } = useSignInForm();
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
      <Button.Large
        loading={loading}
        label={'signIn.signIn'}
        onPress={handleSubmit(onSubmit)}
      />
      <Text style={styles.signUpContainer}>
        <Text>{t('signIn.dontHaveAccount')}</Text>
        <Text style={styles.signUp}>{t('signIn.signUp')}</Text>
      </Text>
    </SafeAreaView>
  );
};
