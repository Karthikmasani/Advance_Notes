
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDhFrkckdLJZU4GT2-Qj0mm0niFegGV4R0",
  authDomain: "noteapp-d8f7f.firebaseapp.com",
  projectId: "noteapp-d8f7f",
  storageBucket: "noteapp-d8f7f.appspot.com",
  messagingSenderId: "1008410426699",
  appId: "1:1008410426699:web:719ed6d41e87343dd8fcce"
};

// Initialize Firebase


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const notesCollection = collection(db, "notes")