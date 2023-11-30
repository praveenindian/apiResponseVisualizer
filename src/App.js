import React from 'react';
import './App.css';
import AboutUs from './Components/AboutUs.tsx';
import NavBar from './Components/NavBar.tsx';
import Home from './Components/Home.tsx';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';

function App() {
  const navHeading = 'RESPONSE VISUALIZER';
  return (
   <>
   <Router>
   <NavBar heading={navHeading}/>
      <Routes>
          <Route path="/" element={ <Home/>} />
          <Route path="/aboutus" element={ <AboutUs/>} />
      </Routes>
    </Router>
   </>
  );
}

export default App;
