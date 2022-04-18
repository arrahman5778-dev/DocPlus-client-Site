// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqXgVOXdLWaBC_EittH47uAmBE1NEdt4o",
  authDomain: "doctor-10.firebaseapp.com",
  projectId: "doctor-10",
  storageBucket: "doctor-10.appspot.com",
  messagingSenderId: "762732520011",
  appId: "1:762732520011:web:05bd0060f23b53cb4963ce",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
