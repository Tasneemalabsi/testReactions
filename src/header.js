 
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import logoImage from './11.png';

import './navstyle.css'; 

function Header() {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
      <Navbar.Brand className="mx-auto" href="#home">
  <Image src={logoImage} alt="Logo" height="40" loading="lazy" />
</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link  to="about-section" >About Us</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
            <Nav.Link href="#car">Car</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;

