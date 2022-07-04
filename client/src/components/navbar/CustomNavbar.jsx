import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "./CustomNavbar.css";

function CustomNavbar() {

    return (
        <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
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
                        <Nav.Link href="#signin">Sign in</Nav.Link>
                        <Nav.Link eventKey={2} href="#signup">
                           Sign Up
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default CustomNavbar;