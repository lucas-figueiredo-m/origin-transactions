import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { ImagePickerResponse } from './ImagePickerServive.type';

export class ImagePickerService {
  static async getImageFromGallery(): Promise<ImagePickerResponse> {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      includeBase64: true,
      selectionLimit: 1,
    });

    if (result.didCancel) {
      return null;
    }

    const base64 = `data:image/jpeg;base64,${result?.assets?.[0].base64}`;

    return {
      base64,
      path: result?.assets?.[0].uri || '',
    };
  }

  static async getImageFromCamera(): Promise<ImagePickerResponse> {
    const result = await launchCamera({
      mediaType: 'photo',
      includeBase64: true,
      saveToPhotos: true,
    });

    if (result.didCancel) {
      return null;
    }

    const base64 = `data:image/jpeg;base64,${result?.assets?.[0].base64}`;

    return {
      base64,
      path: result?.assets?.[0].uri || '',
    };
  }
}
