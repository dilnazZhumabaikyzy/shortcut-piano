import React, { useEffect } from "react";
import App from '../App';

import { useState, createContext, useContext } from "react";
import { Compositions } from '../pages/compositions';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Play  from '../pages/play';
import { Instruction } from '../pages/instruction';
import Login from "../pages/login";
import Profile from "../pages/profile";



import { basicGmail } from '../modules/compositions';
import { shortcutsListGmail } from '../modules/shortcuts';
import {user as userInfo} from "../modules/user";
import { observer } from 'mobx-react-lite';
import RequireAuth from "../hook/RequireAuth";
import TestComponent from "../hook/TestComponent";
import Store from '../store/store.js'

export const UserContext = createContext();

const store = new Store();



export const MyRoutes = observer(() => {
  
  const compositionProps = basicGmail;

  
  useEffect(()=>{
    
    localStorage.setItem('user',JSON.stringify(store.user));

    },[]);

   useEffect(()=>{
    if(localStorage.getItem('token')){
      async function mygn(params) {
        await store.checkAuth();
      }
      mygn();      
    }
   },[])
    return (
        <UserContext.Provider value={{store}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App/>} />
            <Route path='/compositions/:category/:app' element={<Compositions/>} />
            <Route path='/play/:category/:app/:param' element={<Play/>}/>
            <Route path='/instruction/:category/:app/:param' element={<Instruction basicGmail = {basicGmail}/>} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/profile' element={<RequireAuth><Profile/></RequireAuth>}/>
            <Route path='test' element={<TestComponent/>}/>
          </Routes>
        </BrowserRouter>
        </UserContext.Provider>
    )
});