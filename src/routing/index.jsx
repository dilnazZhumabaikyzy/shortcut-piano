import React, { useEffect } from "react";
import App from '../App';

import { useState, createContext, useContext } from "react";
import { Compositions } from '../components/pages/compositions';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Play  from '../components/pages/play-page';
import { Instruction } from '../components/pages/instruction';

import { basicGmail } from '../modules/compositions';
import { shortcutsList } from '../modules/shortcuts';


export const UserContext = createContext();



export const MyRoutes = () => {

  const compositionProps = basicGmail;

  const [gameStatus,setGameStatus] = useState("basic");
  const [song,setSong] = useState(compositionProps[0]);
  const [currentCommands,setCurrentCommands] = useState(shortcutsList.slice(song.section[0],song.section[1]));
  useEffect(()=>{
    setCurrentCommands(shortcutsList.slice(song.section[0],song.section[1]));
    console.log(song);
    },[song]);

    return (
        <UserContext.Provider value={{currentCommands,gameStatus,setGameStatus,song,setSong}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App/>} />
            <Route path='/play' element={<Play song = {song}/>} />
            <Route path='/compositions/:category' element={<Compositions myArray = {compositionProps} />} />
            <Route path='/instruction' element={<Instruction currentCommands ={currentCommands}/>} />
          </Routes>
        </BrowserRouter>
        </UserContext.Provider>
    )
}