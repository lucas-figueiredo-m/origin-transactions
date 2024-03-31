import firestore from '@react-native-firebase/firestore';

export class FirestoreService {
  static async createUser(uid: string, name: string, profilePic: string) {
    return firestore().collection('users').doc(uid).set({
      name,
      profilePic,
    });

    // return firestore().collection('users').add({
    //   name: 'Lucas',
    //   profilePic: 'https://example.com/image.jpg',
    //   uid: '1q2w3er45t6y67u8i8i',
    // });
  }
}
