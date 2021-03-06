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
import { useDispatch } from "react-redux";
import { currentUser } from "../redux/actions/UsersAction";
import AdminProfile from "../pages/profiles/AdminProfile";
import UserProfile from "../pages/profiles/UserProfile";


export default function App() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const token = localStorage.getItem('token')


  useEffect(() => {
    dispatch(currentUser(token, navigate))

  }, [token])



  return (
    <div className="s_c">
      {/*<Socialicons/>*/}
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/signup" element={<SignUp/>} />
        <Route path="/user" element={<UserProfile />} />
        <Route path="/admin" element={<AdminProfile/>} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/writearticle" element={<WriteArticle />} />
        <Route path="/editprofile" element={<Editprofile />} />
      </Routes>
    </div>

  );
}


