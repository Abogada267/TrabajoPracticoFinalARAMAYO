import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDl97eVEAkbg0iAdMifm3ePvstKYXS5Glw",
  authDomain: "trabajopracticofinalaramayo.firebaseapp.com",
  projectId: "trabajopracticofinalaramayo",
  storageBucket: "trabajopracticofinalaramayo.appspot.com",
  messagingSenderId: "239313910871",
  appId: "1:239313910871:web:fec316ce70a8016cf93712",
  measurementId: "G-1RWFZ84T7Q"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { db };
