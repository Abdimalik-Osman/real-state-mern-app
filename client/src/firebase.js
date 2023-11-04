// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-app-5e7b3.firebaseapp.com",
  projectId: "mern-estate-app-5e7b3",
  storageBucket: "mern-estate-app-5e7b3.appspot.com",
  messagingSenderId: "1031399506762",
  appId: "1:1031399506762:web:571b80a2e8e17faf4f77b3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);