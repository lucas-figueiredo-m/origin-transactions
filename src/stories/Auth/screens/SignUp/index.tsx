import React, { useRef } from 'react';
import {
  Alert,
  SafeAreaView,
  Text,
  TextInput as RNTextInput,
  View,
} from 'react-native';
import { styles } from './styles';
import { Avatar, Button, TextInput } from '@components';
import { Logo } from '@assets/icons';
import { Controller } from 'react-hook-form';
import { useTranslation } from '@hooks';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { useNavigation } from '@react-navigation/native';
import { AuthStackNavigationParams, AuthStackRoutes } from '@navigators';
import { useSignUpForm } from './hooks';

type SignUpNavigation = AuthStackNavigationParams<AuthStackRoutes.SignUp>;

export const SignUp: React.FC = () => {
  const t = useTranslation();
  const { onSignUpPress, control, errors, loading, image, onEditImagePress } =
    useSignUpForm();

  const emailInputRef = useRef<RNTextInput>(null);
  const nameInputRef = useRef<RNTextInput>(null);
  const passwordInputRef = useRef<RNTextInput>(null);
  const passwordConfirmInputRef = useRef<RNTextInput>(null);

  const { navigate } = useNavigation<SignUpNavigation>();

  const onSignInPress = () => {
    navigate(AuthStackRoutes.SignIn);
  };

  const onSignUp = () => {
    if (!image.base64 || image.base64 === '') {
      return Alert.alert('Please, select a profile picture.');
    }

    onSignUpPress();
  };

  return (
    <KeyboardAwareScrollView bounces={false}>
      <SafeAreaView style={styles.root}>
        <View style={styles.header}>
          <Logo width={75} height={75} />
          <Text style={styles.title}>{t('signUp.title')}</Text>
        </View>
        <Avatar src={image.base64} onEditPress={onEditImagePress} />
        <View style={styles.inputContainer}>
          <Controller
            control={control}
            name="email"
            render={({ field }) => (
              <TextInput
                ref={emailInputRef}
                onSubmitEditing={() => nameInputRef.current?.focus()}
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
            name="name"
            render={({ field }) => (
              <TextInput
                ref={nameInputRef}
                onSubmitEditing={() => passwordInputRef.current?.focus()}
                style={styles.input}
                placeholder={'signUp.name'}
                onChangeText={field.onChange}
                autoCapitalize="none"
                keyboardType="email-address"
                value={field.value}
                error={errors.name?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field }) => (
              <TextInput
                ref={passwordInputRef}
                onSubmitEditing={() => passwordConfirmInputRef.current?.focus()}
                style={styles.input}
                secureTextEntry
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
                ref={passwordConfirmInputRef}
                onSubmitEditing={onSignUp}
                style={styles.input}
                secureTextEntry
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
          onPress={onSignUp}
        />
        <Text style={styles.signInContainer}>
          <Text>{t('signUp.doesHaveAccount')}</Text>
          <Text onPress={onSignInPress} style={styles.signIn}>
            {t('signUp.signIn')}
          </Text>
        </Text>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};
