// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXI_EgmUo2-W2y8Ucfg_f-aCGkOQwrXcM",
  authDomain: "email-password-auth-ee9cf.firebaseapp.com",
  projectId: "email-password-auth-ee9cf",
  storageBucket: "email-password-auth-ee9cf.firebasestorage.app",
  messagingSenderId: "473703079072",
  appId: "1:473703079072:web:5b6cea8b25a29481767dc5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);