import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";

export const startNewNote = ( ) =>{
    return async (dispatch,getState)=>{

        const {uid} = getState().auth;
        console.log(uid);
        
        // uid del usuario 
        
const newNote ={

    
    
//! tomar el uid, luego se creará la nota 

    title:'',
    body:'',
    date: new Date().getTime(),
    imageURL:[],//hhttps://foto1.jpg
}
const newDoc= doc(collection(FirebaseDB,`${uid}/journal/notes`) )
const setDoResp = await setDoc(newDoc,newNote);

console.log({newDoc,setDoResp});

//! dipatch 
    }
}