import React from 'react';
import Navbar from './components/Navbar.jsx'; 
import Display from './components/Display.jsx';
import Homes from './components/Homes.jsx';
import Value from './components/Value.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import CTAsec from './components/CTAsec.jsx';
function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Navbar />
        <Display />
      </div>
      <Homes/>
      <Value/>
      <Contact/>
      <CTAsec/>
      <Footer/>
    </div>
  );
}

export default App;
