
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Themetoggle from "../../components/themetoggle";
import { updateuser } from '../../redux/actions/UsersAction';
import axios from 'axios';

import "./Editprofile.css";

export default function Editprofile() {


    const currentUser = JSON.parse(localStorage.getItem("user"))


    const dispatch = useDispatch()
    const [firstname, SetFirstName] = useState(currentUser.firstname)
    const [lastname, SetLastName] = useState(currentUser.lastname)
    const [email, SetEmail] = useState(currentUser.email)
    const [password, SetPassword] = useState(currentUser.password)


    const updateProfileHandler = async(e) => {

        try {
            const { data } = await axios.put('http://localhost:4000/api/users/update/' + currentUser._id,{firstname,lastname,email,password})
            localStorage.setItem('user',JSON.stringify(data.user))
            console.log(data.user)           
        } catch (error) {
            console.log(error.message)

        }
    }




    return (
        <div>
            <header className="fixed-top site__header">
                <MainNavbar />
            </header>
            <div className="settings">
                <div className="settingsWrapper">
                    <div className="settingsTitle">
                        <span className="settingsTitleUpdate">Update Your Account</span>
                        <span className="settingsTitleDelete">Delete Account</span>
                    </div>
                    <form className="settingsForm">
                        <label>Profile Picture</label>
                        <div className="settingsPP">
                            <img
                                src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                alt=""
                            />
                            <label htmlFor="fileInput">
                                <i className="settingsPPIcon far fa-user-circle"></i>{" "}
                            </label>
                            <input
                                id="fileInput"
                                type="file"
                                style={{ display: "none" }}
                                className="settingsPPInput"
                            />
                        </div>
                        <label>Firstname</label>
                        <input type="text" placeholder="Firstname" value={firstname} onChange={(e) => SetFirstName(e.target.value)} />
                        <label>Lastname</label>
                        <input type="text" placeholder="Lastname" name="name" value={lastname} onChange={(e) => SetLastName(e.target.value)} />
                        <label>Email</label>
                        <input type="Email" placeholder="Email" name="email" value={email} onChange={(e) => SetEmail(e.target.value)} />
                        <label>Password</label>
                        <input type="password" placeholder="Password" name="password" value={password} onChange={(e) => SetPassword(e.target.value)} />
                        <button className="settingsSubmitButton" type="submit" onClick={(e) => updateProfileHandler(e)}>
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
