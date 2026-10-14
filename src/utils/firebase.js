import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAvWMtzeB-CH6HPHVzIh1u_qk2xxliGXXM",
  authDomain: "petpuja-67161.firebaseapp.com",
  projectId: "petpuja-67161",
  storageBucket: "petpuja-67161.firebasestorage.app",
  messagingSenderId: "691173632833",
  appId: "1:691173632833:web:4d71c89a5c54f3f100cfc0",
  measurementId: "G-TSE2JNP4S4",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Authentication
export const auth = getAuth(app);
