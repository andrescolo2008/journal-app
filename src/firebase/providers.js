import { GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";

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
await updateProfile(FirebaseAuth.currentUser,{displayName})

        return {
            ok:true,
            uid,photoURL,email,displayName
        }
        
    } catch (error) {
        console.log(error);
        return {ok: false, errorMessage:error.message}
        
    }

 }

 export const loginWithEmailPassword = async({email,password,displayName})=>{
    
    
    try {
console.log({email,password});

         const resp = await signInWithEmailAndPassword(FirebaseAuth,email,password)
        const {uid,displayName,photoURL}=resp.user;
// await updateProfile(FirebaseAuth.currentUser,{displayName})

        return {
            ok:true,
            uid,photoURL,email,password,displayName
        }
        
    } catch (error) {
        return {ok: false, errorMessage:error.message}
        
    }

 }

 export const logOutFirebase= async( ) =>{
    return await FirebaseAuth.signOut()
 }