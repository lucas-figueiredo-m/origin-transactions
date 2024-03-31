import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export class ImagePickerService {
  static async getImageFromGallery() {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      includeBase64: true,
      selectionLimit: 1,
    });

    if (result.didCancel) {
      return null;
    }

    return result?.assets?.[0].base64 || '';
  }

  static async getImageFromCamera() {
    const result = await launchCamera({
      mediaType: 'photo',
      includeBase64: true,
      saveToPhotos: true,
    });

    if (result.didCancel) {
      return null;
    }

    return result?.assets?.[0].base64 || '';
  }
}
