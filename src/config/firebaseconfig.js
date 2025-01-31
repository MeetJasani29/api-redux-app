// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC43rSDIGHXrE9p9AcPtP2uLlo0WmfBQvM",
  authDomain: "library-management-cb578.firebaseapp.com",
  projectId: "library-management-cb578",
  storageBucket: "library-management-cb578.firebasestorage.app",
  messagingSenderId: "973635862904",
  appId: "1:973635862904:web:933def903a6c14d767888d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);