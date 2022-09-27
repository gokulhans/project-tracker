import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  // apiKey: process.env.REACT_APP_FIREBASE_KEY,
  apiKey: "AIzaSyBeSJNCmT6nQddvTXQjje_sFiA1A-pOc3M",
  authDomain: "project-tracker-35373.firebaseapp.com",
  projectId: "project-tracker-35373",
  storageBucket: "project-tracker-35373.appspot.com",
  messagingSenderId: "913420084150",
  appId: "1:913420084150:web:2cd9b621ebcce0d33d9717"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
