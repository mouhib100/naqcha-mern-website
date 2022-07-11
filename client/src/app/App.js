import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, useNavigate } from "react-router-dom";
import SignUp from "../pages/signup/SignUp";
import SignIn from "../pages/signin/SignIn";
import Themetoggle from "../components/themetoggle/index"
import Socialicons from "../components/socialicons/index"
import "./App.css";
import WriteArticle from "../pages/writeArticle/WriteArticle";
import Editprofile from "../pages/Settings/Editprofile";
import LandingPage from "../pages/LandingPage";


export default function App() {

  const navigate = useNavigate


  return (
    <div>
      <Themetoggle/>
      {/*<Socialicons/>*/}
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/signin" element={<SignIn/>} />
        <Route path="/writearticle" element={<WriteArticle/>} />
        <Route path="/editprofile" element={<Editprofile/>} />
      </Routes>
    </div>

  );
}
