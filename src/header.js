 
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
  let {isAuthenticated} = useAuth0()

  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>
  
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="/"><b>Home</b></Nav.Link>
            <Nav.Link href="#about"><b>About Us</b></Nav.Link>
            <br/>
            <Navbar.Brand className="mx-auto" href="/">
  <Image src={logoImage} alt="Logo" height="60" loading="lazy" />
</Navbar.Brand>
            <Nav.Link href="#contact"><b>Contact Us</b></Nav.Link>
            <Nav.Link href="#car"><b>Car</b></Nav.Link>
          </Nav>
        </Navbar.Collapse>

        {isAuthenticated ? <LogoutButton/> : <LoginButton/> }

      </Container>
    </Navbar>
  );
}

export default Header;
