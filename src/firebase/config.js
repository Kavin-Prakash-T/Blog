// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpchkSZPlVLjsbTcTWCpqC02Rz-zSZW2E",
  authDomain: "blog-23a98.firebaseapp.com",
  projectId: "blog-23a98",
  storageBucket: "blog-23a98.firebasestorage.app",
  messagingSenderId: "400699926780",
  appId: "1:400699926780:web:e7c806c9d4463816828f79",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();