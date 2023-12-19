import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvqlafJwdUm87MpwHbhaX4n2TEcdd0zEc",
  authDomain: "portfolio-efb2a.firebaseapp.com",
  projectId: "portfolio-efb2a",
  storageBucket: "portfolio-efb2a.appspot.com",
  messagingSenderId: "140141883878",
  appId: "1:140141883878:web:d08907c016de5fb77d6627",
  measurementId: "G-WWBJN9NKJH"
}

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);

