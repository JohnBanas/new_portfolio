import React from 'react';
import Favicon from '../../assets/images/favicon-32x32.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navigation() {
  // const {contactSelected setContactSelected}
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">
        <img
          alt="JB"
          src= {Favicon}
          width="64"
          height="64"
          className="d-inline-block align-top"
        />{'  '}
        <Navbar.Text>
          John Patrick Banas
        </Navbar.Text>
      </Navbar.Brand>
      <Nav className="mr-auto" variant="pills" defaultActiveKey="#about">
        <Nav.Link href="#about">About</Nav.Link>
        <Nav.Link href="#portfolio">Portfolio</Nav.Link>
        <Nav.Link href="#resume">Resume</Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
      </Navbar>
  );
}

export default Navigation;