import React, { useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import logoImage from './12.png';
import './navstyle.css'; // Import the styles
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from './Login';
import LogoutButton from './logout';

function Header() {
  const { isAuthenticated, user } = useAuth0();
  const [showPanel, setShowPanel] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (showPanel) {
        const panel = document.getElementById('side-panel');
        if (panel && !panel.contains(event.target)) {
          setShowPanel(false);
        }
      }
    };

    window.addEventListener('click', handleOutsideClick);
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  }, [showPanel]);

  const handleImageClick = (e) => {
    e.stopPropagation();
    setShowPanel(!showPanel);
  };

  const panelStyle = {
    position: 'fixed',
    top: 60,
    right: showPanel ? 50 : '-250px',
    minWidth: '200px',
    maxWidth: '70%',
    height: '40%',
    background: '#161717',
    color: " #ffffff",
    transition: 'right 0.3s ease-in-out',
    zIndex: 999,
    padding: '20px',
    boxSizing: 'border-box',
    borderRadius: '10px',
  };

  return (
    <>
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
          {isAuthenticated ? (
            <div onClick={handleImageClick}>
              <img
                src={user.picture}
                className="user-image"  
                alt="User Profile"
              />
            </div>
          ) : (
            <LoginButton />
          )}
        </Container>
      </Navbar>

      {showPanel && (
        <div id="side-panel" style={panelStyle} onClick={(e) => e.stopPropagation()}>
          <div className="content-style">  {/* Use the content style */}
            <img src={user.picture} className="user-imag" alt="User Profile" />
            <div className="username">{user.name}</div>  {/* Use the username style */}
            <div className="email">{user.email}</div>  {/* Use the email style */}
            <div className="button-container">  {/* Use the button container style */}
              <LogoutButton />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Header;
