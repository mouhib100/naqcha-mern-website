import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router'
import { useDispatch } from 'react-redux';

import { useSelector } from 'react-redux'

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { getAllPosts, getpost } from '../../redux/actions/PostsAction';

import MainNavbar from '../../components/MainNavbar/MainNavbar';
import axios from 'axios';
import PostCard from '../../components/postCard/PostCard';

const UserProfile = () => {


    return (
        <div>
            <MainNavbar />
            <PostCard/>
        </div>
    )
}

export default UserProfile