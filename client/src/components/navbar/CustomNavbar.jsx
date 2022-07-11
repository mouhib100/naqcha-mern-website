import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

import "./CustomNavbar.css";

function CustomNavbar() {

    return (
        <Navbar collapseOnSelect expand="lg" bg="warning" variant="dark">
            <Container>
                <Navbar.Brand href="#home">NaQcha</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#training">Training</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link><Link to={"/signin"}>Sign In</Link></Nav.Link>
                        <Nav.Link eventKey={2}><Link to={"/signup"}>Sign Up</Link></Nav.Link>   
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default CustomNavbar;