import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBaVlWMmV-9tuYryKheHH6KfJ36V7W5mnU",
  authDomain: "proyecto-reac-37a24.firebaseapp.com",
  projectId: "proyecto-reac-37a24",
  storageBucket: "proyecto-reac-37a24.appspot.com",
  messagingSenderId: "140564182160",
  appId: "1:140564182160:web:b9d256511c319abc2fd415"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
