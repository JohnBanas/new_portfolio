import React from 'react';
import profilePic from '../../assets/images/new_profile.png';
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function About() {
  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Image src={profilePic} alt="profile" width="200" height="200" roundedCircle />
      </Row>
      <Row>
        <h1 className="text-primary ml-5" id="about">A Blurb</h1>
      </Row>
      <Row>
        <div>
          <p className="text-primary">
            John has attended the Vanderbilt University Owen School of Engineering "Full-Stack Web Developer" Bootcamp. After completing six months of intensive training, several professional websites have been made using his currently preferred technological skillset, the MERN stack. These are available to view within the portfolio or resume sections. The MERN stack, or, MongoDB, Express, React (also React Native), and Node allow the creation of single page web applications (SPA). These SPA can be progressive web applications (PWA) as well, which can seemlessly keep user data and user interaction, even in offline conditions. PWA's function very similarly to a native mobile app, and are on the cutting edge of website applications. John continues his development education, and is currently finishing a Computer Science Associates at NCSS in Tennessee. The bootcamp as well the NashDev community allowed John the space to specify his future career goal, to work in Data Science. With a foundation built in SQL/NoSQL databases and database management systems, he continues to pursue this never ending journey of education and discovery.
          </p>
        </div>
      </Row>
    </Container>
  );
}

export default About;