import firestore from '@react-native-firebase/firestore';

export class FirestoreService {
  static async createUser(uid: string, name: string, avatar: string) {
    return await firestore().collection('users').doc(uid).set({
      name,
      avatar,
    });
  }
}
