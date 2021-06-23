import React, { useState } from 'react';
import Image from 'react-bootstrap/Image'
import Carousel from 'react-bootstrap/Carousel';


function Project() {
  const myProject = [
    {
      title: 'code-quiz',
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
      <Carousel.Item>
        <Carousel.Caption>
          <h3>
            {myProject.title}
          </h3>
          <p>{myProject.description}</p>
          <a href={myProject.deployed}>Deployment</a>
          <a href={`https://github.com/JohnBanas/${myProject.title}`}>GitHub</a>
        </Carousel.Caption>
        <Image src={require(`../../assets/images/${myProject.title}.png`).default} alt={myProject.title} width="350" height="350" rounded />
      </Carousel.Item>
    );
  }); 

  return (
    <Carousel>
      {slides}
    </Carousel>
  );

}

export default Project;