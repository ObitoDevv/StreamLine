import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

export const firebaseConfig = {
  apiKey: "AIzaSyBDh3pbjj_QRZ_3hGDfzNslP2RyoIcSf0w",
  authDomain: "createapp-ea67b.firebaseapp.com",
  projectId: "createapp-ea67b",
  storageBucket: "createapp-ea67b.appspot.com",
  messagingSenderId: "569227794697",
  appId: "1:569227794697:web:5c56d4726f643c13b51bd8",
  measurementId: "G-SVKLK7B8MV"
};  


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore(app)
