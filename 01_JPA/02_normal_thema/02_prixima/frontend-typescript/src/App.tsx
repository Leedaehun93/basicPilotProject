/* C:\Work\08_Pilot_Project\01_Blog\01_JPA\02_normal_thema\02_prixima\frontend-typescript\src\App.tsx */
import React from 'react';
import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';

export default function App() {
  return (
    <div className="App">
     {/* TODO: 본문 */}
     <Routes>
     <Route path="/" element={<Home />} />
     </Routes>
    </div>
  );

} // end of App

