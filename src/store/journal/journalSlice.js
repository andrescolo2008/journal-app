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
 
    },

    updateNote: (state,  action ) => {
 
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
    deleteNoteById,
} = journalSlice.actions;