 import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
name:'journal',
 initialState: {
isSaving: true,
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
 
    },

    setActiveNote: (state,  action ) => {
 
    },

    setNotes: (state,  action ) => {
 
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
    setNotes,
    setSavings,
    updateNote,
    deleteNoteById,
} = journalSlice.actions;