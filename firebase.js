 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";

 import{getAuth, createUserWithEmailAndPassword ,signOut,updateProfile ,signInWithEmailAndPassword,sendPasswordResetEmail,onAuthStateChanged } from"https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js"
 import{getFirestore , collection,  addDoc,orderBy,query,onSnapshot,serverTimestamp } from"https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js"


 const firebaseConfig = {
   apiKey: "AIzaSyC3eCSZLFbMqJbn8GhyDsHUNgFuTMq6yLY",
   authDomain: "students-attendance-app-b7cfe.firebaseapp.com",
   projectId: "students-attendance-app-b7cfe",
   storageBucket: "students-attendance-app-b7cfe.firebasestorage.app",
   messagingSenderId: "1000513024021",
   appId: "1:1000513024021:web:3f2630e4e7cbdc51951e1c",
   measurementId: "G-W3HDEZZQP8"
 };



 const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 const db = getFirestore(app);
  

 export{
    getAuth,
     createUserWithEmailAndPassword,
     auth,
     collection, 
     addDoc,
     db,
     updateProfile,
     signInWithEmailAndPassword,
     sendPasswordResetEmail,
     onAuthStateChanged
     ,orderBy,
     query,
     onSnapshot ,
     serverTimestamp,
     signOut
 }