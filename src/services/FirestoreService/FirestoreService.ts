import firestore from '@react-native-firebase/firestore';
import { CreateFirestoreUser } from './FirestoreService.type';

export class FirestoreService {
  static async createUser({
    uid,
    name,
    email,
    profilePic,
  }: CreateFirestoreUser) {
    return firestore().collection('users').doc(uid).set({
      name,
      email,
      profilePic,
    });
  }

  static async getUser(uid: string) {
    return firestore().collection('users').doc(uid).get();
  }
}
