import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';


function Project() {
  const myProject = [
    {
      title: 'coding-quiz',
      description: 'A timed multiple choice coding quiz application.',
      deployed: 'https://johnbanas.github.io/coding-quiz/'
    },
    {
      title: 'weather-dashboard',
      description: 'A website to dynamically show the current weather of any chosen city.',
      deployed: 'https://johnbanas.github.io/weather-dashboard/'
    },
    {
      title: 'motivation-manager',
      description: 'A planner that motivates while managing time.',
      deployed: 'https://johnbanas.github.io/motivation-manager/'
    },
    {
      title: 'tech-blog',
      description: 'Tech_Blog is a simple CMS-style blog website, with a focus on MVC systems in the architectural structure.',
      deployed: 'https://damp-retreat-25612.herokuapp.com/'
    },
    {
      title: 'password-generator',
      description: `A website that generates a password based on a user's set parameters, with the ability to have uppercase, lowercase, numbers, and special characters.`,
      deployed: 'https://johnbanas.github.io/password-generator/'
    },
    {
      title: 'horiseon-landing-page',
      description: 'Landing page example, using HTML & CSS.',
      deployed: 'https://johnbanas.github.io/horiseon-landing-page/'
    }
  ];

  //map through projects to create slides for carousel
  const slides = myProject.map((myProject) => {
    return (
      <Col className="mt-5, mb-5">
        <h2 className="text-warning"><strong>{myProject.title}</strong></h2>
        <Card style={{ width: '20rem', height:'35rem'}}>
          <Card.Img variant="bottom" src={require(`../../assets/images/${myProject.title}.png`).default} alt={myProject.title} rounded />
          <Card.Body>
            <Card.Title className="text-dark">
              {myProject.description}
            </Card.Title>
            <Card.Text className="text-dark">
            <a href={myProject.deployed}>Deployment</a> <br></br>
              <a href={`https://github.com/JohnBanas/${myProject.title}`}>GitHub</a>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  });

  return (
    <Container>
      <Row className="mt-5, mb-5">
        {slides}
      </Row>
    </Container>
  );

}

export default Project;