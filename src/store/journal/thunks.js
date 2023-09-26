import { collection, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { addEmptyNote, savingNewNNote, setActiveNote, setNotes, setSavings, updateNote } from "./";
import { loadNotes } from "../../helpers/loadNotes";
import { fileUpload } from "../../helpers/fileUpload";

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


export const startSaveNote= ( ) =>{
    return async (dispatch,getState) =>{
 
        dispatch(setSavings())

        const {uid} = getState().auth;
        const {active:note,title,body} = getState().journal;

        const noteToFirestore= {...note}
        delete noteToFirestore.id
        
        const docRef=doc (FirebaseDB,`${uid}/journal/notes/${note.id}`)

        await setDoc(docRef,noteToFirestore,{merge:true})

        

        dispatch(updateNote(note))
    }
 }
 
  export const startUploadingFiles  = ( files =[]) =>{

    return async (dispatch) =>  {
            dispatch(setSavings())

            await fileUpload(files[0])
            
    }
 }
