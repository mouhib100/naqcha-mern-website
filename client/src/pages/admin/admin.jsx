import React from 'react'
import { useNavigate } from 'react-router'

const Admin = () => {

  const navigate = useNavigate()
    const token = localStorage.getItem('token')
    console.log('token',token)
    if(!token){
        window.location.href = '/signin'
    }
  
  return (
    <div>admin</div>
  )
}

export default Admin