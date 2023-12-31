import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, startLogOut } from '../store/auth';
import { FirebaseAuth } from '../firebase/config';
import { startLoadingNotes } from '../store/journal';

export const useCheckAuth = () => {
    const {status}= useSelector(state => state.auth)

    const dispatch=useDispatch();
  
    useEffect(() => {
  
  onAuthStateChanged(FirebaseAuth, async (user ) =>{
  if(!user) return dispatch(logout());
  
  const {photoURL,displayName,email,uid } =user;
  dispatch(login({photoURL,displayName,email,uid} ));
  dispatch(startLoadingNotes());
  
  })
    }, [])

        return status

}
