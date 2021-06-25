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
        <p><em>All technologies and methods have available links for more information.</em></p>
        </Row>
      <Row>
        <ul>
          <li className="text-primary" key="111">
            <a href="https://www.w3schools.com/html/">HTML5</a>
          </li>
          <li className="text-primary" key="112">
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS">CSS3</a>
          </li>
          <li className="text-primary" key="113">
            <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Resources">JavaScript (ECMA-262 11th Edition)</a>
          </li>
          <li className="text-primary" key="114">
            <a href="https://nodejs.org/en/">Node.js</a>/<a href="https://www.npmjs.com/">NPM</a>
          </li>
          <li className="text-primary" key="115">
            <a href="https://expressjs.com/">Express.js</a>
          </li>
          <li className="text-primary" key="116">
            <a href="https://www.educative.io/blog/object-oriented-programming">Object Oriented Programming(OOP)</a>
          </li>
          <li className="text-primary" key="117">
            <a href="https://en.wikipedia.org/wiki/Functional_programming#:~:text=In%20computer%20science%2C%20functional%20programming,by%20applying%20and%20composing%20functions.&text=When%20a%20pure%20function%20is,state%20or%20other%20side%20effects.">Functional Programming</a>
          </li>
          <li className="text-primary" key="118">
            <a href="https://www.w3schools.com/sql/sql_intro.asp">SQL Databases</a> & <a href="https://searchsqlserver.techtarget.com/definition/database-management-system">DMS</a>(<a href="https://www.sqlite.org/index.html">SQLite</a>, <a href="https://www.mysql.com/">MySQL</a> using <a href="https://www.npmjs.com/package/sequelize">Sequelize</a>)
          </li>
          <li className="text-primary" key="119">
            <a href="https://www.mongodb.com/nosql-explained">NoSQL Databases</a> & <a href="https://searchsqlserver.techtarget.com/definition/database-management-system">DMS</a>(<a href="https://www.mongodb.com/">MongoDB</a> using <a href="https://mongoosejs.com/">Mongoose.js</a>)
          </li>
          <li className="text-primary" key="120">
            <a href="https://reactjs.org/">React.js</a>
          </li>
          <li className="text-primary" key="121">
            <a href="https://reactnative.dev/">React Native</a>
          </li>
          <li className="text-primary" key="122">
            <a href="https://jquery.com/">JQuery</a>
          </li>
          <li className="text-primary" key="123">
            <a href="https://git-scm.com/">Git</a>/<a href="https://github.com/">GitHub</a>
          </li>
          <li className="text-primary" key="124">
            <a href="https://www.infoworld.com/article/3237508/what-is-agile-methodology-modern-software-development-explained.html">AGILE</a>/<a href="https://www.atlassian.com/agile/scrum">SCRUM</a>
          </li>
          <li className="text-primary" key="125">
            <a href="https://en.wikipedia.org/wiki/API">APIs</a>
          </li>
          <li className="text-primary" key="126">
            <a href="https://en.wikipedia.org/wiki/Object%E2%80%93relational_mapping">Object Relational Mapping(ORM)</a>
          </li>
          <li className="text-primary" key="127">
            <a href="https://www.geeksforgeeks.org/mvc-design-pattern/#:~:text=The%20Model%20View%20Controller%20(MVC,but%20not%20for%20complete%20application.">Model-View-Controller(MVC)</a>
          </li>
          <li className="text-primary" key="128">
            <a href="https://blog.hyperiondev.com/index.php/2018/09/10/everything-need-know-mern-stack/">MERN Development Stack</a>
          </li>
        </ul>
      </Row>
      <Row className="justify-content-center mb-5">
        <Container>
          <p><em>Click the image below to download full PDF resume.</em></p>
        </Container>
    <a download={resume} href={resume} title="resume">
      <Image alt="resume" src={resumePic} />
        </a>
      </Row>
    </Container>
  )
}

export default Resume;