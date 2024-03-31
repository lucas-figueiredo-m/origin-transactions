import storage from '@react-native-firebase/storage';

export class FirebaseStorageService {
  static async uploadImage(imagePath: string, uid: string) {
    const reference = storage().ref(`/images/${uid}/profile.png`);
    return await reference.putFile(imagePath);
  }

  static async getImageUrl(uid: string) {
    const reference = storage().ref(`/images/${uid}/profile.png`);
    return await reference.getDownloadURL();
  }
}
