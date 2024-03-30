import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { styles } from './styles';
import { Button, TextInput } from '@components';
import { Logo } from '@assets/icons';
import { Controller } from 'react-hook-form';
import { useTranslation } from '@hooks';

import { useSignInForm } from './hooks';
import { useNavigation } from '@react-navigation/native';
import { AuthStackNavigationParams, AuthStackRoutes } from '@navigators';

type SignInNavigation = AuthStackNavigationParams<AuthStackRoutes.SignIn>;

export const SignIn: React.FC = () => {
  const t = useTranslation();
  const { onSignInPress, control, errors, loading } = useSignInForm();

  const { navigate } = useNavigation<SignInNavigation>();

  const onSignUpPress = () => {
    navigate(AuthStackRoutes.SignUp);
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
        onPress={onSignInPress}
      />
      <Text style={styles.signUpContainer}>
        <Text>{t('signIn.dontHaveAccount')}</Text>
        <Text onPress={onSignUpPress} style={styles.signUp}>
          {t('signIn.signUp')}
        </Text>
      </Text>
    </SafeAreaView>
  );
};
