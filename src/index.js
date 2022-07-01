import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Play  from './components/pages/play-page';
import { Instruction } from './components/pages/instruction';
const shortcutsList = [
  {description: "К предыдущему сообщению в открытой цепочке",
  keys:["P"],
  },
  {description: "К следующему сообщению в открытой цепочке",
  keys:["N"]},
  {description: "Переместить курсор на панель инструментов",
  keys:[","]},
  {description: "Выбрать цепочку писем",
  keys:["X"]},
  {description: "Выбрать одну из пометок",
  keys:["S"]},
  
  {description: "К главному окну",
  keys:["Shift","Esc"]},
  {description: "К последнему чату или окну создания сообщения",
  keys:["Esc"]},
  {description: "К следующему чату или окну создания сообщения",
  keys:["Ctrl", "."]},
  {description: "К предыдущему чату или окну создания сообщения",
  keys:["Ctrl",","]},
  {description: "Открыть дополнительный адрес отправителя",
  keys:["Ctrl", "Shift", "F"]},
  {description: "Отправить",
  keys:["Ctrl", "Ввод"]},
  {description: "Добавить копию",
  keys:["Ctrl","Shift","C"]},
  {description: "Добавить скрытую копию",
  keys:["Ctrl","Shift","C"]},
  // {description: "",
  // keys:["",],}
  // {description: "",
  // keys:["",],}
  // {description: "",
  // keys:["",],}
  // {description: "",
  // keys:["",],}
  
]; 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<App/>} />
      <Route path='/play' element={<Play/>} />
      <Route path='/instruction' element={<Instruction/>} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
