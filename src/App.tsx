import React from 'react';
import logo from './logo.svg';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/home';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    
    <>
    
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/home" element={<Home></Home>}  />
          <Route path="/" element={<Home></Home>}  />
        </Routes>
      </BrowserRouter>
    </>
  );
}
// <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    
export default App;
