import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { FirebaseAuth } from "./config";

 const googleProvider= new GoogleAuthProvider();
 googleProvider.setCustomParameters({    prompt: 'select_account'})// sirve para permitir seleccionar la cuenta de google cada vez que uno quiera volver a conectarse 

  export const signInWithGoogle = async ( ) =>{

    try{
        const result = await signInWithPopup(FirebaseAuth,googleProvider)
        const credentials= GoogleAuthProvider.credentialFromResult(result)

        const {displayName,email,photoURL,uid} = result.user
        console.log({displayName , email,photoURL,uid});
        return{
            ok:true,
            //user info
            displayName,email,photoURL,uid
        }
        
    }catch(error){

        console.log(error);

        const errorCode = error.code;
        const errorMessage = error.message;
        return{
            ok:false,    
            errorMessage,
        }

    }
 }

 export const registerUserWithEmailPassword = async({email,password,displayName})=>{
    try {
console.log({email,password,displayName});

         const resp = await createUserWithEmailAndPassword(FirebaseAuth,email,password)
        const {uid,photoURL}=resp.user;
        console.log(resp);
// TODO:actualziar  el displayName en Firebase
        return {
            ok:true,
            uid,photoURL,email,displayName
        }
        
    } catch (error) {
        console.log(error);
        return {ok: false, errorMessage:error.message}
        
    }

 }