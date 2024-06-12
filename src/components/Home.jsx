import React from 'react';
import Qualification from './Qualification';
import About from './About';
import Skill from './Skill';
import Experience from './Experience';
import Projects from './Projects';
import ContactForm from './ContactForm';
function Home() {
  return (
    <div className="HomeStyle">
      
      <About />
      <Skill />
      <Qualification />
      
      <Experience company="Tiers Limited " subheading="MERN Stack developer internee " duration = "12th june - 12th August 2023 " listContent={[
          "Developed front-end components using React.js",
          "Implemented RESTful APIs using Node.js and Express",
          "Collaborated with team members to deliver high-quality software products",
        ]} certificateUrl="https://notch-cactus-vacuum.glitch.me/uploads/169238452422944.png"
        />
        <Projects/>
        <ContactForm />
    </div>
  );
}

export default Home;
