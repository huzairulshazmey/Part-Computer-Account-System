import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyB8ETr2UZwp9sxE2Ki8q5Dy1_4f6mOjC4s",
  authDomain: "myaestic-4291a.firebaseapp.com",
  projectId: "myaestic-4291a",
  storageBucket: "myaestic-4291a.appspot.com",
  messagingSenderId: "139897060758",
  appId: "1:139897060758:web:6bc7d898e89529889d31b7",
  measurementId: "G-M2BSBFXZ72"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };