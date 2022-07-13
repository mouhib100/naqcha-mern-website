
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import MainNavbar from "../../components/MainNavbar/MainNavbar";
import Themetoggle from "../../components/themetoggle";
import { updateuser } from '../../redux/actions/UsersAction';

import "./Editprofile.css";

export default function Editprofile() {

    const userSignin = useSelector((state) => state.User)
    const userInfo = userSignin;


    console.log(userInfo)


    const dispatch = useDispatch()
    const [firstname, SetFirstName] = useState('')
    const [lastname, SetLastName] = useState('')
    const [email, SetEmail] = useState('')
    const [password, SetPassword] = useState('')


    const updateProfileHandler = (e) => {
        e.preventDefault()
        dispatch(updateuser({ userId: userInfo._id, firstname, lastname, email, password }))
    }

    useEffect(() => {
        if (userInfo) {
            console.log(userInfo.name)
            SetEmail(userInfo.email);
            SetFirstName(userInfo.firstname);
            SetLastName(userInfo.lastname);
            SetPassword(userInfo.password);
        }
    }, [])



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
                        <input type="text" placeholder="Firstname" onChange={(e) => SetFirstName(e.target.value)} />
                        <label>Lastname</label>
                        <input type="text" placeholder="Lastname" name="name" onChange={(e) => SetLastName(e.target.value)} />
                        <label>Email</label>
                        <input type="Email" placeholder="Email" name="email" onChange={(e) => SetEmail(e.target.value)} />
                        <label>Password</label>
                        <input type="password" placeholder="Password" name="password" onChange={(e) => SetPassword(e.target.value)} />
                        <button className="settingsSubmitButton" type="submit" onClick={(e) => updateProfileHandler(e)}>
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
