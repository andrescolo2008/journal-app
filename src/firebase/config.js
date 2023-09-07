// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkSkVFGBeCCUDZvUwUYdvHgLnnksENJXU",
  authDomain: "curso-react-aa041.firebaseapp.com",
  projectId: "curso-react-aa041",
  storageBucket: "curso-react-aa041.appspot.com",
  messagingSenderId: "894262482204",
  appId: "1:894262482204:web:afb466cff2674fd24e56d9",
  measurementId: "G-KP68LTYMVX"
};

// Initialize Firebase
 export const FirebaseApp = initializeApp(firebaseConfig);// contine la aplicación
const analytics = getAnalytics(app);
export const FirebaseAuth =getAuth(firebaseApp);// funcionalidadesde autenticación 
export const FirebaseDB = getFirestore(FirebaseApp)// configuración de base de datos 
