import React from 'react';
import resume from '../../assets/images/Resume.pdf';
import resumePic from '../../assets/images/Resume.jpg';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

function Resume() {
  return (
    <Container>
      <Row>
        <h3 className="text-primary">Current Proficiencies/Methodologies:</h3>
        </Row>
      <Row>
        <ul>
          <li className="text-primary" key="111">
            HTML5
          </li>
          <li className="text-primary" key="112">
            CSS3
          </li>
          <li className="text-primary" key="113">
            JavaScript (ECMA-262 11th Edition)
          </li>
          <li className="text-primary" key="114">
            Node.js/NPM
          </li>
          <li className="text-primary" key="115">
            Express.js
          </li>
          <li className="text-primary" key="116">
            Object Oriented Programming(OOP)
          </li>
          <li className="text-primary" key="117">
            Functional Programming
          </li>
          <li className="text-primary" key="118">
            SQL Databases & DMS(SQLite, MySQL using Sequelize)
          </li>
          <li className="text-primary" key="119">
            NoSQL Databases & DMS(MongoDB using Mongoose.js)
          </li>
          <li className="text-primary" key="120">
            React.js
          </li>
          <li className="text-primary" key="121">
            React Native
          </li>
          <li className="text-primary" key="122">
            JQuery
          </li>
          <li className="text-primary" key="123">
            Git/GitHub
          </li>
          <li className="text-primary" key="124">
            AGILE/SCRUM
          </li>
          <li className="text-primary" key="125">
            APIs
          </li>
          <li className="text-primary" key="126">
            Object Relational Mapping(ORM)
          </li>
          <li className="text-primary" key="127">
            Model-View-Controller(MVC)
          </li>
          <li className="text-primary" key="128">
            MERN Development Stack
          </li>
        </ul>
      </Row>
      <Row className="justify-content-center mb-5">
        <Container>
          <p className="text-primary">Click the image below to download full PDF resume.</p>
        </Container>
    <a download={resume} href={resume} title="resume">
      <Image alt="resume" src={resumePic} />
        </a>
      </Row>
    </Container>
  )
}

export default Resume;