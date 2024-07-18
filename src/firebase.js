import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

export const firebaseConfig = {
  apiKey: "AIzaSyAyHUA3BmehVXDaCtSMurQqMJ-hCG8iDqk",
  authDomain: "streamline-83f91.firebaseapp.com",
  projectId: "streamline-83f91",
  storageBucket: "streamline-83f91.appspot.com",
  messagingSenderId: "718978269839",
  appId: "1:718978269839:web:c5310478cf7b7c49f226fa",
  measurementId: "G-2X559GZJQT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
