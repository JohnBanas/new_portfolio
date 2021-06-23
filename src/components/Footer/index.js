import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Footer() {

  return (
    
      <footer className="footer">
      <Container>
        <Row>
          <a size="lg" href="/">whatever</a>
          <span>&copy; 2020 JPB</span>
        </Row>
        <Row>
          <span>Powered by:</span>
            <a href="/">my hands</a>
            </Row>
        </Container>
      </footer>
    
  );

};

export default Footer;