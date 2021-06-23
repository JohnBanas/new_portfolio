import React from 'react';
import './App.css';
import About from './components/About';
import Navigation from './components/Nav';
import ContactForm from './components/Contact';
import Project from './components/Project';
// import Portfolio from './components/Portfolio';

function App() {

  // const [contactSelected, setContactSelected] = useState(false);
  return (
    
    <div>
      <Navigation
        // contactSelected={contactSelected}
        // setContactSelected={setContactSelected}
      >
      </Navigation>
      <main>
        {/* {!contactSelected ? (
          <> */}
            <About></About>
          {/* </>
        ) : ( */}
          <ContactForm></ContactForm>
        {/* )} */}
        <Project />
        </main>
    </div>
      
  );
}

export default App;
