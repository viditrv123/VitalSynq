import {
  GoogleAuthProvider,
  signInWithPopup,
  UserCredential,
} from "firebase/auth";
import { auth } from "./firebase.client";

export async function signInWithGoogle(): Promise<string> {
  const provider = new GoogleAuthProvider();

  const result: UserCredential = await signInWithPopup(auth, provider);
  const token: string = await result.user.getIdToken();

  return token;
}
