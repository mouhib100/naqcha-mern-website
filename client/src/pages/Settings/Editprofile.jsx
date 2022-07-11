
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Themetoggle from "../../components/themetoggle";
import { updateuser } from '../../redux/actions/UsersAction';

import "./Editprofile.css";

export default function Editprofile() {

    const dispatch = useDispatch()
    const [firstname, SetFirstName] = useState('')
    const [lastname, SetLastName] = useState('')
    const [email, SetEmail] = useState('')
    const [password, SetPassword] = useState('')

    const updateProfileHandler = (e) => {
        e.preventDefault()
        dispatch(updateuser({firstname,lastname,email,password})) //hedhi el data eli n7eb ndispatcheha(nwaze3ha) maysir el submit ela manenzel 3al button
    
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
                        <input type="text" placeholder="Firstname" name="name" onChange={(e) => SetFirstName(e.target.value)} />
                        <label>Lastname</label>
                        <input type="text" placeholder="Lastname" name="name" onChange={(e) => SetLastName(e.target.value)} />
                        <label>Email</label>
                        <input type="Email" placeholder="Email" name="email" onChange={(e) => SetEmail(e.target.value)} />
                        <label>Password</label>
                        <input type="password" placeholder="Password" name="password" onChange={(e) => SetPassword(e.target.value)} />
                        <button className="settingsSubmitButton" type="submit" onClick={(e)=>updateProfileHandler(e)}>
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
