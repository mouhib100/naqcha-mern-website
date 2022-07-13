import React, { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getAllPosts,getpost } from '../../redux/actions/PostsAction';
import { useParams } from "react-router-dom";



const PostCard = () => {

    const dispatch = useDispatch();
    const posts = useSelector((state) => state.Posts.posts) //Allows you to extract data from the Redux store state, using a selector function.
    const { id } = useParams();



    console.log(posts)

    useEffect(() => {
        loadPost(posts);
    }, []);


    const loadPost = () => {
        //dispatch(getpost("62cb1eec5a0a7def73c2a3f3"));
        dispatch(getAllPosts());
    };



    return (
        <div>
            <Row xs={1} md={3} className="g-4">
                {posts?.posts?.map((post, idx) => (
                    <Col key ={idx}>
                        <Card>
                            <Card.Img variant="top" src="https://fr.web.img3.acsta.net/r_654_368/newsv7/21/04/29/14/22/0010719.jpg"  />
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Text>
                                {post.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default PostCard

