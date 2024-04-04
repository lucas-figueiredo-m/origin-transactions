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

  static async uploadReceiptImage(
    imagePath: string,
    transactionId: number,
    uid: string,
  ) {
    const reference = storage().ref(
      `/images/${uid}/receipts/${transactionId}/receipt.png`,
    );
    await reference.putFile(imagePath);
    return await reference.getDownloadURL();
  }
}
