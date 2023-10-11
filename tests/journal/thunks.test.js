import { collection, deleteDoc, getDocs } from "firebase/firestore/lite"
import { addEmptyNote, savingNewNNote, setActiveNote, startNewNote } from "../../src/store/journal"
import { FirebaseDB } from "../../src/firebase/config"

describe('pruebas en < journal Thunks>',()=>{
    const dispatch =jest.fn()
    const getState =jest.fn()

    beforeEach(()=>jest.clearAllMocks())
test('startNewNote debe de crear una nueva nota en blanco ',async  () => { 

    const uid='TEST-UI'

    getState.mockReturnValue({auth: {uid: uid} } )

    await startNewNote()(dispatch,getState)

    expect(dispatch).toHaveBeenCalledWith(savingNewNNote())
    expect(dispatch).toHaveBeenCalledWith(addEmptyNote({
      title:'',
      body:'',
      id:expect.any(String),
      date:expect.any(Number),
      imageURL:[],
    }))
    expect(dispatch).toHaveBeenCalledWith(setActiveNote({
      title:'',
      body:'',
      id:expect.any(String),
      date:expect.any(Number),
      imageURL:[],
    }))
      // borrar de firebase 

      const collectionRef= collection(FirebaseDB,`${uid}/journal/notes`) 

      const docs=await getDocs(collectionRef)

      const deletePromises =[];
      docs.forEach( doc=> deletePromises.push(deleteDoc(doc.ref) ) )
      await Promise.all (deletePromises)
 
  })
})