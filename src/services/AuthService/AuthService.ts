import auth from '@react-native-firebase/auth';

export class AuthService {
  static signIn = async (email: string, password: string) => {
    return auth().signInWithEmailAndPassword(email, password);
  };

  static signOut = async () => {
    return auth().signOut();
  };

  static signUp = async (email: string, password: string) => {
    return auth().createUserWithEmailAndPassword(email, password);
  };
}
