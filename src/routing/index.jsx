import React, { useEffect } from "react";
import App from '../App';

import { useState, createContext, useContext } from "react";
import { Compositions } from '../pages/compositions';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Play  from '../pages/play';
import { Instruction } from '../pages/instruction';

import { basicGmail } from '../modules/compositions';
import { shortcutsList } from '../modules/shortcuts';
import {user as userInfo} from "../modules/user";
export const UserContext = createContext();



export const MyRoutes = () => {
  
  const compositionProps = basicGmail;

  const [gameStatus,setGameStatus] = useState("basic");
  const [song,setSong] = useState(compositionProps[0]);
  const [currentCommands,setCurrentCommands] = useState(shortcutsList.slice(song.section[0],song.section[1]));
  const [myUser, setUser] = useState(userInfo); 

  useEffect(()=>{
    
    setCurrentCommands(shortcutsList.slice(song.section[0],song.section[1]));
    

    localStorage.setItem('user',JSON.stringify(myUser));

    },[song]);
   
    return (
        <UserContext.Provider value={{currentCommands,gameStatus,setGameStatus,song,setSong, myUser, setUser}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App/>} />
            <Route path='/compositions/:category/:app' element={<Compositions/>} />
            <Route path='/play/:category/:app/:param' element={<Play/>}/>
            <Route path='/instruction/:category/:app/:param' element={<Instruction shortcutsList ={shortcutsList} basicGmail = {basicGmail}/>} />
          </Routes>
        </BrowserRouter>
        </UserContext.Provider>
    )
}