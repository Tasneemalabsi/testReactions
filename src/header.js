 
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import logoImage from './12.png'
import './navstyle.css'; 
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './Login';
import LogoutButton from './logout';




function Header() {
  let {isAuthenticated, user} = useAuth0()

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
            <Nav.Link href="#about-section">About Us</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
            <Nav.Link href="#car">Car</Nav.Link>
            <Nav.Link href="#motor">Motor</Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {isAuthenticated ? 
        <>
        <LogoutButton />
    
        <img src={user.picture} style={{width: "50px", height: "50px", borderRadius: "50%", border: "1px solid #cddc39 ",filter: "drop-shadow (0 0 8px #ff5722)"}} />
        
        </>
        : 
        <LoginButton />}

      </Container>
    </Navbar>
  );
}

export default Header;
