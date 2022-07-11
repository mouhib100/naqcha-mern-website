import React from 'react'
import { useNavigate } from 'react-router'

const User = () => {

  const navigate = useNavigate()
  const token = localStorage.getItem('token')
  console.log('token', token)
  if (!token) {
    window.location.href = '/signin'
  }

  return (
    <div>user</div>
  )
}

export default User