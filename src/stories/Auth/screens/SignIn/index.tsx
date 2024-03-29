import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { styles } from './styles';
import { Button, TextInput } from '@components';
import { Logo } from '@assets/icons';

export const SignIn: React.FC = () => {
  return (
    <SafeAreaView style={styles.root}>
      <Logo width={200} height={200} />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          placeholder={'signIn.email'}
        />
        <TextInput
          style={styles.input}
          secureTextEntry
          placeholder={'signIn.password'}
        />
      </View>
      <Button.Large label={'signIn.signIn'} />
      <Text style={styles.signUpContainer}>
        <Text>Don't have an account? </Text>
        <Text style={styles.signUp}>Sign up</Text>
      </Text>
    </SafeAreaView>
  );
};
