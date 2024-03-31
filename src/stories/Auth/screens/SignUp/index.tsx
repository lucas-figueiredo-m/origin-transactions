import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { styles } from './styles';
import { Avatar, Button, TextInput } from '@components';
import { Logo } from '@assets/icons';
import { Controller } from 'react-hook-form';
import { useTranslation } from '@hooks';

import { useNavigation } from '@react-navigation/native';
import { AuthStackNavigationParams, AuthStackRoutes } from '@navigators';
import { ImagePickerService } from '@services';
import { useSignUpForm } from './hooks';

type SignUpNavigation = AuthStackNavigationParams<AuthStackRoutes.SignUp>;

export const SignUp: React.FC = () => {
  const t = useTranslation();
  const { onSignUpPress, control, errors, loading } = useSignUpForm();
  const [image, setImage] = useState<string>('');

  const { navigate } = useNavigation<SignUpNavigation>();

  const onSignInPress = () => {
    navigate(AuthStackRoutes.SignIn);
  };

  const onEditPress = async () => {
    const result = await ImagePickerService.getImageFromGallery();
    if (!result) {
      return;
    }
    setImage(`data:image/jpeg;base64,${result}`);
    console.log(result.slice(0, 50));
  };

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.header}>
        <Logo width={75} height={75} />
        <Text style={styles.title}>{t('signUp.title')}</Text>
      </View>
      <Avatar src={image} onEditPress={onEditPress} />
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
          name="name"
          render={({ field }) => (
            <TextInput
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
