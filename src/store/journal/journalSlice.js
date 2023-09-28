import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
name:'journal',
 initialState: {
isSaving: false,
messageSaved:'',
notes:[],
active:null,
// active:{
//     id:'abcd',
//     title:'',
//     body:'',
//     date:12345,
//     imageURL:[],//hhttps://foto1.jpg
// }
},
reducers: {
    addEmptyNote: (state,  action ) => {
      state.notes.push(action.payload)
      state.isSaving= false
    },

    setActiveNote: (state,  action ) => {
        state.active=action.payload;
    },

    savingNewNNote: (state ) => {
      state.isSaving= true
 
    },
    setNotes: (state,  action ) => {
        state.notes= action.payload
    },

    setSavings: (state ) => {
      state.isSaving = true
      state.messageSaved='';
    },

    updateNote: (state,  action ) => {// payload: note
      state.isSaving= false;

      state.notes =state.notes.map(note=>{

          if(note.id === action.payload.id){
            return action.payload
          }
            return note
        })
        state.messageSaved=`${action.payload.title},actualizada correctamente`
    },

    setPhotosToActiveNote: (state,  action ) => {
      state.active.imageURL=[...state.active.imageURL, ...action.payload]
      state.isSaving=false
    },

    clearNotesLogout: (state ) => {
      state.isSaving= false;
      state.messageSaved= '';
      state.notes=[];
      state.active=null;
    },

    deleteNoteById: (state,  action ) => {
 
    },
  }
});

// Action creators are generated for each case reducer function
export const { 
    addEmptyNote,
    setActiveNote,
    savingNewNNote,
    setNotes,
    setSavings,
    updateNote,
    setPhotosToActiveNote,
    clearNotesLogout,
    deleteNoteById,
} = journalSlice.actions;