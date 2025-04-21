// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBovSJ1GpaPt51SxvCI6qBfJGwkqXw5WJM",
  authDomain: "todo-app-33d9f.firebaseapp.com",
  projectId: "todo-app-33d9f",
  storageBucket: "todo-app-33d9f.firebasestorage.app",
  messagingSenderId: "922895498832",
  appId: "1:922895498832:web:4da5a8155a64c327369b55",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
