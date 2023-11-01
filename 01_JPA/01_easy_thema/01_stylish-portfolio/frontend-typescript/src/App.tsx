/* C:\Work\08_Pilot_Project\01_Blog\01_JPA\01_easy_thema\01_stylish-portfolio\frontend-typescript\src\App.tsx */

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./components/common/NotFound";

function App() {
  return (
    <div>
      <Routes>
        {/* home 페이지 */}
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
