// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBX48E9f6fjCrf7JfDo6FQUyG6-1r6pd7I",
  authDomain: "book-bazaar-7e111.firebaseapp.com",
  projectId: "book-bazaar-7e111",
  storageBucket: "book-bazaar-7e111.appspot.com",
  messagingSenderId: "467324812826",
  appId: "1:467324812826:web:ee5f72d5635acee6305ba3",
  measurementId: "G-ZWRT3KV3HL"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
// const analytics = getAnalytics(app);
