/* C:\Work\08_Pilot_Project\01_Blog\01_JPA\03_high_thema\01_tour\frontend-typescript\src\App.tsx */
import React from "react";
import logo from "./logo.svg";
import "./App.css";

// TODO: 외부 lib import
// aos css import(npm 설치)
import "aos/dist/aos.css";
// 개발자가 직접 만든 css
import "./assets/css/style.css";

// TODO: 리액트 import
import Nav from "./components/common/Nav";
import Home from "./pages/Home";
import Footer from "./components/common/Footer";
import { Routes, Route } from "react-router-dom";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Elements from "./pages/Elements";
import CustomerListPage from "./pages/customer/CustomerListPage";
import AddCustomerPage from "./pages/customer/AddCustomerPage";
import CustomerPage from "./pages/customer/CustomerPage";
import QnaListPage from "./pages/qna/QnaListPage";
import AddQnaPage from "./pages/qna/AddQnaPage";
import QnaPage from "./pages/qna/QnaPage";

export default function App() {
  return (
    <div className="App">
      {/* TODO: 머리말 */}
      <Nav />

      {/* TODO: 본문 */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/elements" element={<Elements />} />

        {/* TODO: 고객 */}
        <Route path="/customer" element={<CustomerListPage />} />
        <Route path="/add-customer" element={<AddCustomerPage />} />
        <Route path="/customer/:cid" element={<CustomerPage />} />

        {/* Q & A */}
        <Route path="/qna" element={<QnaListPage />} />
        <Route path="/add-qna" element={<AddQnaPage />} />
        <Route path="/qna/:qno" element={<QnaPage />} />
      </Routes>
      {/* TODO: 꼬리말 */}
      <Footer />
    </div>
  );
}
