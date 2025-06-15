import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import{getAuth,signInWithEmailAndPassword,onAuthStateChanged,signOut}from"https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js"

const firebaseConfig = {
  apiKey: "AIzaSyDpu3OA8JkhFRv-kGVAlczDBEqqZytGfK8",
  authDomain: "admin-attendance-portal.firebaseapp.com",
  projectId: "admin-attendance-portal",
  storageBucket: "admin-attendance-portal.firebasestorage.app",
  messagingSenderId: "552425857581",
  appId: "1:552425857581:web:72cc3b7e4bd680a792cea4",
  measurementId: "G-28G9PCZXR4"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);




export{
    getAuth,
    auth,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut

}