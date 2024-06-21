import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Main from './Components/Main';
import './App.css';
import Lessons from './Components/Lessons';

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Main />}/>
      <Route path='/lessons' element={<Lessons/>}/>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
