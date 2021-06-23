import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Footer() {

  return (

    <footer className="footer mb-4 bg-grey">
      <Container>
        <Row className="justify-content-center">
          <a href="https://www.linkedin.com/in/john-banas-2a9378203/" className="text-primary">Linked In</a>
        </Row>
        <Row className="justify-content-center">
          <a href="https://github.com/JohnBanas" className="text-primary">GitHub</a>
        </Row>
        <Row className="justify-content-center">
          <a href="https://dev.to/johnbanas" className="text-primary">Dev</a>
        </Row>
        <Row className="justify-content-center">
          <span className="text-primary"> &copy; 2021 John Patrick Banas </span>
        </Row>
      </Container>
    </footer>

  );

};

export default Footer;