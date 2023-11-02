/* C:\Work\08_Pilot_Project\01_Blog\01_JPA\02_normal_thema\01_proman\frontend-typescript\src\App.tsx */
import React from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/common/Nav';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
     {/* TODO: 메뉴 */}
    <Nav />
     {/* TODO: 본문 */}
     <Home />
    </div>
  );
}

export default App;
