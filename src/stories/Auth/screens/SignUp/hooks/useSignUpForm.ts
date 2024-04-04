import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  AuthService,
  FirebaseStorageService,
  FirestoreService,
  ImagePickerService,
} from '@services';
import { useState } from 'react';
import {
  SignUpDefaultValues,
  SignUpValidator,
  SignUpValidatorType,
} from '../validator';
import { ReactNativeFirebase } from '@react-native-firebase/app';

type ImageData = {
  base64: string;
  path: string;
};

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

  const [loading, setLoading] = useState(false);
  const [signUpError, setSignUpError] = useState({ error: false, message: '' });
  const [image, setImage] = useState<ImageData>({ base64: '', path: '' });

  const onSubmit = async (data: SignUpValidatorType) => {
    setLoading(true);
    try {
      const user = await AuthService.signUp(data.email, data.password);
      await FirebaseStorageService.uploadProfileImage(
        image.path,
        user.user?.uid || '',
      );
      const imageUrl = await FirebaseStorageService.getProfileImageUrl(
        user.user?.uid || '',
      );
      await FirestoreService.createUser(user.user?.uid, data.name, imageUrl);
    } catch (error) {
      const firebaseError = error as ReactNativeFirebase.NativeFirebaseError;
      if (firebaseError.code === 'auth/email-already-in-use') {
        setSignUpError({ error: true, message: 'signUp.emailAlreadyInUse' });
      } else {
        setSignUpError({ error: true, message: 'signUp.unknownError' });
      }
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const onEditImagePress = async () => {
    const result = await ImagePickerService.getImageFromGallery();
    if (!result) {
      return;
    }
    setImage(result);
  };

  const onSignUpPress = handleSubmit(onSubmit);

  const clearSignUpError = () => {
    setSignUpError({ error: false, message: '' });
  };

  return {
    onSignUpPress,
    control,
    errors,
    loading,
    image,
    onEditImagePress,
    clearSignUpError,
    signUpError,
  };
};
