import React from 'react';
import Favicon from '../../assets/images/favicon-32x32.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function Navigation(props) {
  const {
    setAbout,
    setPortfolio,
    setResume,
    setContact
  } = props;

  return (
    <Navbar variant="dark" className="mb-5">

      <Navbar.Brand>
        <img
          alt="JB"
          src= {Favicon}
          width="64"
          height="64"
          className="d-inline-block align-top"
        />{'  '}
        <Navbar.Text className="text-black">
          John Patrick Banas
        </Navbar.Text>
      </Navbar.Brand>
      <Nav className="mr-auto" defaultActiveKey="about">
        <Nav.Link eventKey="about" onClick={() => {
          setAbout(true);
          setPortfolio(false);
          setResume(false);
          setContact(false);
        }}>About</Nav.Link>
        <Nav.Link eventKey="portfolio" onClick={() =>{
          setAbout(false);
          setPortfolio(true);
          setResume(false);
          setContact(false);
        }}>Portfolio</Nav.Link>
        <Nav.Link eventKey="resume" onClick={() =>{
          setAbout(false);
          setPortfolio(false);
          setResume(true);
          setContact(false);
        }}>Resume</Nav.Link>
        <Nav.Link eventKey="contact"
          onClick={() => {
            setAbout(false);
            setPortfolio(false);
            setResume(false);
            setContact(true);
          }}>Contact</Nav.Link>
      </Nav>
      </Navbar>
  );
}

export default Navigation;