import { logOutFirebase, loginWithEmailPassword, registerUserWithEmailPassword, signInWithGoogle } from "../../firebase/providers"
import { clearNotesLogout } from "../journal/journalSlice"
import {  checkingCredentials, login, logout } from "./"



 export const checkingAuthentication = (email,password ) =>{
    return async (dispatch) =>{

       dispatch (checkingCredentials())

    }
    
}

export const startGoogleSignIn = () =>{
    return async (dispatch) =>{

        dispatch (checkingCredentials())
        const result = await signInWithGoogle()

        if (!result.ok)  return dispatch(logout(result.errorMessage))

        dispatch (login(result))
        
     }
}

export const startCreatingUserWithEmailPassword = ({email,password,displayName}) =>{

   return async (dispatch)=>{
      dispatch(checkingCredentials());
      const {ok,uid,photoURL,errorMessage} = await registerUserWithEmailPassword({email,password,displayName})

      if(!ok) return dispatch (logout({errorMessage}))

      dispatch (login({uid,displayName,email,photoURL}))
      
   }
}

export const startLoginWithEmailPassword = ({email,password}) =>{
   
   return async (dispatch)=>{

      dispatch(checkingCredentials());
      
      const resp = await loginWithEmailPassword({email,password})
      
      console.log(resp);
      if(!resp.ok) return dispatch (logout(resp))
   
      dispatch (login(resp))
      
   }
}

 export const startLogOut= ( ) =>{
return async (dispatch)=>{

 await logOutFirebase()
 
 dispatch(clearNotesLogout());
 dispatch(logout());

    }

}


