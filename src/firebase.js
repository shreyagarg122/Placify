import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBny7UdZqNkcf-R8na-kMGCohmEjJJAfqE",
  authDomain: "placed-e5067.firebaseapp.com",
  projectId: "placed-e5067",
  storageBucket: "placed-e5067.appspot.com",
  messagingSenderId: "113027646882",
  appId: "1:113027646882:web:0424ecd9049d8cc94b9efb",
  measurementId: "G-6WNX8B8WGY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db =  getFirestore(app);
export default app;