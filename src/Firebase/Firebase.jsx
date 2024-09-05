// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to useimport dotenv from 'dotenv';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDvFWS-i8_uMs7xMzigbiqKuJInbjYjY2o",
  authDomain: "fashions-9e3e1.firebaseapp.com",
  projectId: "fashions-9e3e1",
  storageBucket: "fashions-9e3e1.appspot.com",
  messagingSenderId: "682552387524",
  appId: "1:682552387524:web:311d52ba2caa4dca2aa691",
  measurementId: "G-329YJNSF04"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
