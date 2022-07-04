import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";
import "./MainNavbar.css"

function MainNavbar() {
    return (
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">NaQcha</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Home</Nav.Link>
                        <Nav.Link href="#action2">Write</Nav.Link>
                    </Nav>
                    <Form className="d-flex">
                        <div className="topRight">

                            <Link className="link" to="/settings">
                                <img
                                    className="topImg"
                                    src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                    alt=""
                                />
                            </Link>
                        </div>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MainNavbar;