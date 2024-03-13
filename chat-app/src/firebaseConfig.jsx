// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import {getFirestore} from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD1XtImIooWnC6NZ_OS9aRtFHvIKUn4gAU",
  authDomain: "chatapp-b1dcb.firebaseapp.com",
  projectId: "chatapp-b1dcb",
  storageBucket: "chatapp-b1dcb.appspot.com",
  messagingSenderId: "174312119703",
  appId: "1:174312119703:web:a03a110302f90ed1e138d2",
  measurementId: "G-P8BRLDD2GE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();
export const db=getFirestore(app);