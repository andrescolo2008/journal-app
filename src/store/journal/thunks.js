import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addEmptyNote, savingNewNNote, setActiveNote, setNotes } from "./";
import { loadNotes } from "../../helpers/loadNotes";
import { DockSharp } from "@mui/icons-material";

export const startNewNote = ( ) =>{
    return async (dispatch,getState)=>{
        
        dispatch(savingNewNNote())
        
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
// nueva forma de agregar documentos utilizando  firestore: 
//  const doc = await addDoc(collection(db, `${uid}/journal/notes`), newNote)
const setDoResp = await setDoc(newDoc,newNote);

console.log({newDoc,setDoResp});

newNote.id=newDoc.id;


dispatch(addEmptyNote(newNote))
dispatch(setActiveNote(newNote))

 }
}

export const startLoadingNotes = ( ) =>{
return async ( dispatch,getState) =>{

    const {uid} = getState().auth;
        if(!uid)throw new Error('El UID del usuario no existe')
               const notes = await loadNotes(uid)
            dispatch(setNotes(notes))
            }

}

