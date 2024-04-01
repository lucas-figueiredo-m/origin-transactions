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
  const [image, setImage] = useState<ImageData>({ base64: '', path: '' });

  const onSubmit = async (data: SignUpValidatorType) => {
    setLoading(true);
    try {
      const user = await AuthService.signUp(data.email, data.password);
      await FirebaseStorageService.uploadImage(
        image.path,
        user.user?.uid || '',
      );
      const imageUrl = await FirebaseStorageService.getImageUrl(
        user.user?.uid || '',
      );
      console.log(imageUrl);
      await FirestoreService.createUser(user.user?.uid, data.name, imageUrl);
    } catch (error) {
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

  return {
    onSignUpPress,
    control,
    errors,
    loading,
    image,
    onEditImagePress,
  };
};
