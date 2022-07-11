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
        <div className='MainNavbar'>
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
                            <Nav.Link href="#writearticle"><Link to={"/writearticle"}>Write</Link></Nav.Link>
                        </Nav>
                        <Navbar.Collapse className="justify-content-end">
                            <Link className="link" to="/editprofile">
                                <img
                                    className="topImg"
                                    src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                                    alt=""
                                />
                            </Link>
                        </Navbar.Collapse>
                        <NavDropdown  title="Name">
                            <NavDropdown.Item><Link to={"/editprofile"}>Edit profile</Link></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action3">Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Navbar.Collapse>
                    </Container>
            </Navbar>
        </div>
    );
}

export default MainNavbar;