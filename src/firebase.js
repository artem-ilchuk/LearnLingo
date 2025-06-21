import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDahj2JlUlqJWI7X27rsIY6pYgf0ahOETM",
  authDomain: "learn-lingo-14467.firebaseapp.com",
  databaseURL:
    "https://learn-lingo-14467-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "learn-lingo-14467",
  storageBucket: "learn-lingo-14467.firebasestorage.app",
  messagingSenderId: "554666665516",
  appId: "1:554666665516:web:6425d647b5a17737829389",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
