import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";



const firebaseConfig = {
  apiKey: "AIzaSyAfdQLqIrvI4VdwYbfH0mnJqmsfGExQhQY",
  authDomain: "quiz-chat-auth.firebaseapp.com",
  projectId: "quiz-chat-auth",
  storageBucket: "quiz-chat-auth.appspot.com",
  messagingSenderId: "223628160786",
  appId: "1:223628160786:web:75c70ddcbcc3fd368b4dcb"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const googleAuthProvider = new GoogleAuthProvider();