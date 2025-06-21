// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCZhEewydcH_MzizCk5QUURq8Efjk7dCYY",
  authDomain: "portfolio-likes-ee0ab.firebaseapp.com",
  projectId: "portfolio-likes-ee0ab",
  storageBucket: "portfolio-likes-ee0ab.firebasestorage.app",
  messagingSenderId: "864513546200",
  appId: "1:864513546200:web:3ce94113d69e7831af04ad",
  measurementId: "G-JFT8W3WQKZ"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
