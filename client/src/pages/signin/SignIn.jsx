import { useState } from "react";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import "./SignIn.css";
import { login } from "../../redux/actions/AuthAction";


const SignIn = (props) => {
  const dispatch = useDispatch()
  const [email, SetEmail] = useState('')
  const [password, SetPassword] = useState('')
 
  const submitHandler = (e) => {
    e.preventDefault()
    dispatch(login({email,password})) 
  

  }

  return (
    <div>
      <Container>
        <h1 className=" text-primary mt-5 p-3 text-center rounded">Sign in</h1>
        <Row>
          <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" onChange={(e) => SetEmail(e.target.value)} />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" onChange={(e) => SetPassword(e.target.value)}/>
              </Form.Group>

              <Button variant="primary btn-block" type="submit" onClick={(e)=>submitHandler(e)}>
                Login
              </Button>
              <br/>
              <p>Don't you have an account<Link to={"/signup"}>Sign Up</Link></p>
            </Form>
          </Col>
        </Row>
        <h6 className="mt-5 p-5 text-center text-secondary ">Copyright © 2022 NaQcha. All Rights Reserved.</h6>
      </Container>
    </div>
  );
}

export default SignIn