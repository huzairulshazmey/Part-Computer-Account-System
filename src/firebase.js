import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "Your ApiKey",
  authDomain: "Your authDomain",
  projectId: "Your projectId",
  storageBucket: "Your storageBucket",
  messagingSenderId: "Your messagingSenderId",
  appId: "Your appId",
  measurementId: "Your MeasurementId"
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };