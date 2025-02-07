import React, { useState } from 'react';
import { Link, NavLink } from "react-router-dom";
import { Navbar, Container, Nav, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideoSlash } from '@fortawesome/free-solid-svg-icons';

const Header = ({isLoggedIn, onLogout}) => {
    console.log("Header - isLoggedIn:", isLoggedIn);

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/" style={{ "color": 'gold' }}>
                    <FontAwesomeIcon icon={faVideoSlash} />Gold
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink className="nav-link" to="/">Home</NavLink>
                        <NavLink className="nav-link" to="/watchList">Watch List</NavLink>
                    </Nav>
                    {isLoggedIn ? (
                        <Button variant="outline-info" onClick={onLogout}>Logout</Button>
                    ) : (
                        <>
                            <Link to="/login">
                                <Button variant="outline-info" className="me-2">Login</Button>
                            </Link>
                            <Link to="/register">
                                <Button variant="outline-info">Register</Button>
                            </Link>
                        </>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;