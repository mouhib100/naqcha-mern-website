import React from 'react'
import { Button, Form, Figure } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import "./SignUp.css";


const SignUp = () => {
  return (
    <div className='signup'>
      <Container>
        <h1 className=" text-primary text-center rounded">Sign up</h1>
        <Row>
          <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
            <Form>
              <Form.Group controlId="formFirstName">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="First Name" />
              </Form.Group>
              <Form.Group controlId="formLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Last Name" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary  btn-block" type="submit">
                Sign up
              </Button>
              <br/>
              <p>Already have an account? <a href="#">Sign in</a></p>
            </Form>
          </Col>
        </Row>
        <h6 className="mt-5 p-5 text-center text-secondary ">Copyright © 2022 NaQcha. All Rights Reserved.</h6>
      </Container>
    </div>
  )
}

export default SignUp