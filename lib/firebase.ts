import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "spacecloud-efc6d.firebaseapp.com",
  projectId: "spacecloud-efc6d",
  storageBucket: "spacecloud-efc6d.appspot.com",
  messagingSenderId: "1042349530133",
  appId: "1:1042349530133:web:4f3b8c69fe13bbfb16821c",
  measurementId: "G-C0V1V6HQBF"
};

!getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export { db, storage };
