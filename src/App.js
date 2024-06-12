import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import ContactForm from './components/ContactForm';
import Projects from './components/Projects';
import Qualification from './components/Qualification';
import Skill from './components/Skill';

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactForm />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/qualification" element={<Qualification />} />
        <Route path="/skill" element={<Skill />} />
      </Routes>
    </Router>
  );
}

export default App;
