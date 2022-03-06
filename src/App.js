import React, {useEffect} from 'react';
import './App.css';
import All from './Components/All';
import Login from './Components/Login/Login';
import { login, logout, selectUser } from './features/userSlice';
import {useSelector, useDispatch} from "react-redux";
import { auth } from './firebase';

function App() {

  
const user = useSelector(selectUser);
const dispatch = useDispatch();

useEffect(()=>{
  auth.onAuthStateChanged((authUser)=>{
    if(authUser){
      dispatch(login({
        uid:authUser.uid,
        photo:authUser.photoURL,
        displayName:authUser.displayName,
        email:authUser.email
      }));
    } else{ 
      dispatch(logout());
    }
  })
},[dispatch]);


  return (
    <div className="App">
      {
        user ? (<All/>) : (<Login/>)
      }
      
    </div>
  );
}


export default App;
