// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getStorage} from "firebase/storage"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "car-maketplace.firebaseapp.com",
  projectId: "car-maketplace",
  storageBucket: "car-maketplace.appspot.com",
  messagingSenderId: "129511452315",
  appId: "1:129511452315:web:429212e06656daf310a03e",
  measurementId: "G-5GCFB0Z82B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)