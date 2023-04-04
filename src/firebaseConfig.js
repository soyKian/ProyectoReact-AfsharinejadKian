import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAgWnN6hNXE3y6Vvw-QRY5B1UoG8Cv5Ipg",
  authDomain: "react-clase.firebaseapp.com",
  projectId: "react-clase",
  storageBucket: "react-clase.appspot.com",
  messagingSenderId: "126249479898",
  appId: "1:126249479898:web:4c3922eeeea75c5d0a7fe3",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
