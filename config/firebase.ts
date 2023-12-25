import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_APIKEY,
  authDomain: "login-f166c.firebaseapp.com",
  projectId: "login-f166c",
  storageBucket: "login-f166c.appspot.com",
  messagingSenderId: "480159267153",
  appId: "1:480159267153:web:2534c1a05a03ba4c657b70",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
