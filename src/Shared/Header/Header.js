import { signOut } from 'firebase/auth';
import React, { } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Header.css'

const Header = () => {

    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }


    return (
        <header>
            <Navbar style={{ padding: "15px" }} collapseOnSelect expand="lg" bg="dark"
                sticky='top' variant="dark">

                <Container className='fs-5'>
                    <Navbar.Brand as={Link} to="/" className='fs-3 fw-bold header1'> PHOTO-STUDIO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link>
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="blogs">Blogs</Nav.Link>

                            <Nav.Link as={Link} to="about">About me</Nav.Link>

                            {
                                user ?
                                    <button className='btn btn-link text-white text-decoration-none ' onClick={handleSignOut}>Sign Out</button> :
                                    <Nav.Link as={Link} to="login"> Login </Nav.Link>

                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header >
    );
};

export default Header;