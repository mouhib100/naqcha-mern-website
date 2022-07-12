import React from 'react'
import { useNavigate } from "react-router-dom";

const AdminProfile = () => {

    let navigate = useNavigate();
    const token = localStorage.getItem('token')
    console.log('token', token)
    if (!token) {
        window.location.href = '/signin'
    }
    return (
        <div>AdminProfile</div>
    )
}

export default AdminProfile