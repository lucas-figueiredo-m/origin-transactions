import React, { useRef } from 'react';
import {
  Pressable,
  SafeAreaView,
  Text,
  View,
  TextInput as RNTextInput,
} from 'react-native';
import { styles } from './styles';
import { Button, TextInput } from '@components';
import { Logo } from '@assets/icons';
import { Controller } from 'react-hook-form';
import { useAppDispatch, useTranslation } from '@hooks';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

import { useSignInForm } from './hooks';
import { useNavigation } from '@react-navigation/native';
import { AuthStackNavigationParams, AuthStackRoutes } from '@navigators';
import { useSelector } from 'react-redux';
import { SettingsActions, settingsSelector } from '@store';
import CheckBox from '@react-native-community/checkbox';
import { Colors } from '@theme';

type SignInNavigation = AuthStackNavigationParams<AuthStackRoutes.SignIn>;

export const SignIn: React.FC = () => {
  const t = useTranslation();
  const {
    onSignInPress,
    control,
    errors,
    loading,
    signInError,
    clearSignInError,
  } = useSignInForm();
  const { keepSignedIn } = useSelector(settingsSelector);
  const dispatch = useAppDispatch();

  const emailInputRef = useRef<RNTextInput>(null);
  const passwordInputRef = useRef<RNTextInput>(null);

  const { navigate } = useNavigation<SignInNavigation>();

  const onSignUpPress = () => {
    navigate(AuthStackRoutes.SignUp);
  };

  const onKeepSignedInToggle = () => {
    dispatch(SettingsActions.setKeepSignedIn(!keepSignedIn));
  };

  const onFieldChange = (
    value: string,
    onChangeCallback: (value: string) => void,
  ) => {
    if (signInError.error) {
      clearSignInError();
    }

    onChangeCallback(value);
  };

  return (
    <KeyboardAwareScrollView
      bounces={false}
      contentContainerStyle={styles.keyboardAwareContent}
    >
      <SafeAreaView style={styles.root}>
        <Logo width={200} height={200} />
        <View style={styles.inputContainer}>
          <Controller
            control={control}
            name="email"
            render={({ field: { value, onChange } }) => (
              <TextInput
                ref={emailInputRef}
                onSubmitEditing={() => passwordInputRef.current?.focus()}
                style={styles.input}
                placeholder={'signIn.email'}
                onChangeText={str => onFieldChange(str, onChange)}
                autoCapitalize="none"
                keyboardType="email-address"
                value={value}
                error={errors.email?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="password"
            render={({ field: { value, onChange } }) => (
              <TextInput
                ref={passwordInputRef}
                onSubmitEditing={onSignInPress}
                style={styles.input}
                secureTextEntry
                placeholder={'signIn.password'}
                onChangeText={str => onFieldChange(str, onChange)}
                value={value}
                error={errors.password?.message}
              />
            )}
          />
          <View style={styles.keepSignedContainer}>
            <CheckBox
              value={keepSignedIn}
              onValueChange={onKeepSignedInToggle}
              tintColor={Colors.Primary}
              onTintColor={Colors.Primary}
              onCheckColor={Colors.Primary}
              boxType="square"
              tintColors={{ true: Colors.Primary, false: Colors.Primary }}
            />
            <Pressable onPress={onKeepSignedInToggle}>
              <Text>{t('signIn.keepSigned')}</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Button.Large
            loading={loading}
            label={'signIn.signIn'}
            onPress={onSignInPress}
          />
          {signInError.error && (
            <Text style={styles.error}>{t(signInError.message)}</Text>
          )}
        </View>
        <Text style={styles.signUpContainer}>
          <Text>{t('signIn.dontHaveAccount')}</Text>
          <Text onPress={onSignUpPress} style={styles.signUp}>
            {t('signIn.signUp')}
          </Text>
        </Text>
      </SafeAreaView>
    </KeyboardAwareScrollView>
  );
};
