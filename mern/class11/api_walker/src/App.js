import './App.css';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import { Home } from './Views/Home';

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
