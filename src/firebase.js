import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from 'firebase/firestore'

// web app's Firebase configuration
const firebaseConfig = {apiKey: process.env.REACT_APP_API_FIREBASE_DATA,
authDomain: "chat-app-e3911.firebaseapp.com",
projectId: process.env.REACT_PROJECT_ID,
storageBucket: process.env.REACT_STOREGE_BUCKET,
messagingSenderId: process.env.REACT_MESSAGING_SENDER_ID,
appId: process.env.REACT_APP_ID};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);