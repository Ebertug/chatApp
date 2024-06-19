// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDtfhELfrq8ICKGcCBy9kXyB2C_AcZOfQw",
    authDomain: "chatapp-3661e.firebaseapp.com",
    projectId: "chatapp-3661e",
    storageBucket: "chatapp-3661e.appspot.com",
    messagingSenderId: "833421648481",
    appId: "1:833421648481:web:299f2d7bc22a638f0f4020"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(ReactNativeAsyncStorage)
  });
export const db = getFirestore(app);
export default app