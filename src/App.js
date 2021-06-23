import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Header from './components/Header';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';
import Footer from './components/Footer';

function App() {

  const [isAbout, setAbout] = useState(true);
  const [isPortfolio, setPortfolio] = useState(false);
  const [isResume, setResume] = useState(false);
  const [isContact, setContact] = useState(false);
  
  return (
    
    <div>
      <Header
        isAbout={isAbout}
        setAbout={setAbout}
        isPortfolio={isPortfolio}
        setPortfolio={setPortfolio}
        isResume={isResume}
        setResume={setResume}
        isContact={isContact}
        setContact={setContact}
      />
      <main>
          {isAbout &&  <About></About>}
        {isContact &&  <ContactForm />}
        {isPortfolio && <Portfolio />}
        {isResume && <Resume />}
      </main>
      <Footer />
    </div>
      
  );
}

export default App;
