import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Play  from './components/pages/play-page';
import { Instruction } from './components/pages/instruction';

import { shortcutsList } from './components/modules';
import { useState, createContext, useContext } from "react";

export const UserContext = React.createContext();

let userProgress = 5;
const currentCommands = shortcutsList.slice(0,userProgress);
const currentI = 0;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <UserContext.Provider value={currentCommands}>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/play' element={<Play/>} />
      <Route path='/instruction' element={<Instruction currentCommands ={currentCommands}/>} />
    </Routes>
  </BrowserRouter>
  </UserContext.Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
