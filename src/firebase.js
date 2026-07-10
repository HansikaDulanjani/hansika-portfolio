import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDFZR2DFrg_Ho_D1sdIoCQjERjdiKk-70g",
  authDomain: "hansika-portfolio-50d88.firebaseapp.com",
  projectId: "hansika-portfolio-50d88",
  storageBucket: "hansika-portfolio-50d88.firebasestorage.app",
  messagingSenderId: "753884360309",
  appId: "1:753884360309:web:d274b307b1e76383ff523c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);