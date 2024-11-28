import React from 'react';
import './Navigation.css';
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navigation() {
    return (
        <Navbar className="navbar-custom" fixed="top" expand="lg">
            <Navbar.Brand className="navbar-brand-custom">
                <Link to="/" className="navbar-logo">CRISTINA FERREIRO</Link>
            </Navbar.Brand>

            <Nav className="navbar-links">
                <Nav.Link as={Link} to="/about" className="navbar-link">About me</Nav.Link>
                <Nav.Link as={Link} to="/projects" className="navbar-link">Projects</Nav.Link>
                <Nav.Link as={Link} to="/moreinfo" className="navbar-link">✚</Nav.Link>
                <Nav.Link as={Link} to="/contact" className="navbar-link">Contact</Nav.Link>


            </Nav>
        </Navbar>
    );
}

export default Navigation;
