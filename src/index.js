import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './index.css';
import App from './App';
// import Navbar from "./components/navbar/navbar";
// import Footer from "./components/footer/footer";
// import AboutMe from "./components/aboutme/aboutme";
// import MyWork from "./components/mywork/mywork";
// import Contact from "./components/contact/contact";
// import Technology from "./components/technology/technology";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    {/* <Navbar /> */}
    <Routes>
      <Route path="/" element={<App />} />
    </Routes>
    {/* <Footer /> */}
  </BrowserRouter>

);