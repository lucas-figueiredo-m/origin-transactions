import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { styles } from './styles';
import { Button, TextInput } from '@components';
import { Logo } from '@assets/icons';
import { Controller } from 'react-hook-form';
import { useTranslation } from '@hooks';

import { useNavigation } from '@react-navigation/native';
import { AuthStackNavigationParams, AuthStackRoutes } from '@navigators';
import { useSignUpForm } from './hooks';

type SignUpNavigation = AuthStackNavigationParams<AuthStackRoutes.SignUp>;

export const SignUp: React.FC = () => {
  const t = useTranslation();
  const { onSignUpPress, control, errors, loading } = useSignUpForm();

  const { navigate } = useNavigation<SignUpNavigation>();

  const onSignInPress = () => {
    navigate(AuthStackRoutes.SignIn);
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
              placeholder={'signUp.email'}
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
              // secureTextEntry
              placeholder={'signUp.password'}
              onChangeText={field.onChange}
              value={field.value}
              error={errors.password?.message}
            />
          )}
        />
        <Controller
          control={control}
          name="confirmPassword"
          render={({ field }) => (
            <TextInput
              style={styles.input}
              // secureTextEntry
              placeholder={'signUp.confirmPassword'}
              onChangeText={field.onChange}
              value={field.value}
              error={errors.confirmPassword?.message}
            />
          )}
        />
      </View>
      <Button.Large
        loading={loading}
        label={'signUp.signUp'}
        onPress={onSignUpPress}
      />
      <Text style={styles.signInContainer}>
        <Text>{t('signUp.doesHaveAccount')}</Text>
        <Text onPress={onSignInPress} style={styles.signIn}>
          {t('signUp.signIn')}
        </Text>
      </Text>
    </SafeAreaView>
  );
};
