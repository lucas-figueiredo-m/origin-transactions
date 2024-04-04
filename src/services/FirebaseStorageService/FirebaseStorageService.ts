import storage from '@react-native-firebase/storage';

export class FirebaseStorageService {
  static async uploadProfileImage(imagePath: string, uid: string) {
    const reference = storage().ref(`/images/${uid}/profile.png`);
    return await reference.putFile(imagePath);
  }

  static async getProfileImageUrl(uid: string) {
    const reference = storage().ref(`/images/${uid}/profile.png`);
    return await reference.getDownloadURL();
  }
}
