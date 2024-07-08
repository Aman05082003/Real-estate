// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey:import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-estate-69616.firebaseapp.com",
  projectId: "mern-estate-69616",
  storageBucket: "mern-estate-69616.appspot.com",
  messagingSenderId: "1060484527037",
  appId: "1:1060484527037:web:b42b44e3fc444a680198d4",
  measurementId: "G-8ES1FJCBDK"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
 export const analytics = getAnalytics(app);
// Initialize Firebase

