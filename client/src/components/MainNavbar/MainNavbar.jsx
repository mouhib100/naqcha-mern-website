import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import Themetoggle from '../themetoggle';
import "./MainNavbar.css"

function MainNavbar() {

    const navigate = useNavigate()


    const logout = async (e) => {
        e.preventDefault()
        await localStorage.removeItem('token');
        navigate("/signin");
    };


    return (
        <div className='MainNavbar'>
            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Brand href="#"><Link to={"/user"}>NaQcha</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link><Link to={"/user"}>Home</Link></Nav.Link>
                            <Nav.Link href="#writearticle"><Link to={"/writearticle"}>Write</Link></Nav.Link>
                        </Nav>
                        <Navbar.Collapse className="justify-content-end">
                            <Themetoggle />
                            <Link className="link" to="/editprofile">
                                <img
                                    className="topImg"
                                    src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                    alt=""
                                />
                            </Link>
                        </Navbar.Collapse>
                        <NavDropdown title="Name">
                            <NavDropdown.Item><Link to={"/editprofile"}>Edit profile</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={(e) => logout(e)}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default MainNavbar;