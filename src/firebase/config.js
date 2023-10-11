// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
import { getEnvironments } from "../helpers";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
  VITE_MEASUREMENTID,}=getEnvironments();


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

// firebase-producción
// const firebaseConfig = {
//   apiKey: "AIzaSyAkSkVFGBeCCUDZvUwUYdvHgLnnksENJXU",
//   authDomain: "curso-react-aa041.firebaseapp.com",
//   projectId: "curso-react-aa041",
//   storageBucket: "curso-react-aa041.appspot.com",
//   messagingSenderId: "894262482204",
//   appId: "1:894262482204:web:afb466cff2674fd24e56d9",
//   measurementId: "G-KP68LTYMVX"

  //firebase testing

  // const firebaseConfig = {
  //   apiKey: "AIzaSyAkSkVFGBeCCUDZvUwUYdvHgLnnksENJXU",
  //   authDomain: "curso-react-aa041.firebaseapp.com",
  //   projectId: "curso-react-aa041",
  //   storageBucket: "curso-react-aa041.appspot.com",
  //   messagingSenderId: "894262482204",
  //   appId: "1:894262482204:web:7005f3ebaf892a5e4e56d9",
  //   measurementId: "G-F23ZWSZSZT"
  // };

  const firebaseConfig = {
    apiKey:VITE_APIKEY,
    authDomain: VITE_AUTHDOMAIN,
    projectId: VITE_PROJECTID,
    storageBucket:VITE_STORAGEBCKET,
    messagingSenderId: VITE_MESSAGINGSENDERID,
    appId: VITE_APPID,
    measurementId: VITE_MEASUREMENTID,
    
  };

  console.log(firebaseConfig);
  


// Initialize Firebase
 export const FirebaseApp = initializeApp(firebaseConfig);// contine la aplicación
// const analytics = getAnalytics(app);
export const FirebaseAuth =getAuth(FirebaseApp);// funcionalidadesde autenticación 
export const FirebaseDB = getFirestore(FirebaseApp)// configuración de base de datos 
