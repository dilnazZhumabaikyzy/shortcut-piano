import React from "react";
import App from '../App';

import { useState, createContext, useContext } from "react";
import { Compositions } from '../components/pages/compositions';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Play  from '../components/pages/play-page';
import { Instruction } from '../components/pages/instruction';

import { basicGmail } from '../modules/compositions';
import { shortcutsList } from '../modules/shortcuts';


export const UserContext = createContext();

let userProgress = 18;
const currentCommands = shortcutsList.slice(8,userProgress);
const currentI = 0;
const compositionProps = basicGmail;


export const MyRoutes = () => {
    const [gameStatus,setGameStatus] = useState("basic");
    return (
        <UserContext.Provider value={{currentCommands,gameStatus,setGameStatus}}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<App/>} />
            <Route path='/play' element={<Play/>} />
            <Route path='/compositions/basic' element={<Compositions myArray = {compositionProps} />} />
            <Route path='/compositions/advanced' element={<Compositions myArray = {compositionProps} />} />
            <Route path='/instruction' element={<Instruction currentCommands ={currentCommands}/>} />
          </Routes>
        </BrowserRouter>
        </UserContext.Provider>
    )
}