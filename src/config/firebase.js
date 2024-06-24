// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBZf21Izl7YJDEpbKfE5AHChY_LKEffZ8w",
  authDomain: "day2-c39a5.firebaseapp.com",
  projectId: "day2-c39a5",
  storageBucket: "day2-c39a5.appspot.com",
  messagingSenderId: "1000477757614",
  appId: "1:1000477757614:web:558cb19789851425539d3f",
  measurementId: "G-PY0H5KRWD2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const googleAuthProvider = new GoogleAuthProvider();

export const database = getFirestore(app);