import React from 'react';
import Navigation from '../Nav'

function Header(props) {

  const {
    isAbout,
    setAbout,
    isPortfolio,
    setPortfolio,
    isResume,
    setResume,
    isContact,
    setContact
  } = props;
  
  return (
    <Navigation isAbout={isAbout}
      setAbout={setAbout}
      isPortfolio={isPortfolio}
      setPortfolio={setPortfolio}
      isResume={isResume}
      setResume={setResume}
      isContact={isContact}
      setContact={setContact} />
  )
  
};

export default Header;