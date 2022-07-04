import { useState } from "react";
import Themetoggle from "../../components/themetoggle";
import { Col, Button, Row, Container, Card, Form } from "react-bootstrap";

import "./SignIn.css";


export const SignIn = () => {



  return (
    <div>
      <Container>
        <h1 className=" text-primary mt-5 p-3 text-center rounded">Sign in</h1>
        <Row>
          <Col lg={5} md={6} sm={12} className="p-5 m-auto shadow-sm rounded-lg">
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Button variant="primary btn-block" type="submit">
                Login
              </Button>
              <br/>
              <p>Don't you have an account<a href="#">Sign up</a></p>
            </Form>
          </Col>
        </Row>
        <h6 className="mt-5 p-5 text-center text-secondary ">Copyright © 2022 NaQcha. All Rights Reserved.</h6>
      </Container>
    </div>
  );
}

