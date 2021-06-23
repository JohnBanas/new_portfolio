import React from 'react';
import resume from '../../assets/images/Resume.pdf';
import resumePic from '../../assets/images/Resume.jpg';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Resume() {
  return (
    <Container>
      <Row className="justify-content-center mt-3 mb-5">
    <a download={resume} href={resume} title="resume">
      <Image alt="resume" src={resumePic} />
        </a>
      </Row>
    </Container>
  )
}

export default Resume;