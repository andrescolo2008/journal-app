import { signInWithGoogle } from "../../firebase/providers"
import { authSlice, checkingCredentials } from "./authSlice"


authSlice
 export const checkingAuthentication = (email,password ) =>{
    return async (dispatch) =>{

       dispatch (checkingCredentials())

    }
    
}

export const startGoogleSignIn = () =>{
    return async (dispatch) =>{

        dispatch (checkingCredentials())
        const result = await signInWithGoogle()

        console.log(result);
        
 
     }
}
