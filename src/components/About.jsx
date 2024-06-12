import React from 'react';
import './About.css'; // Import CSS file
import pic from './images/profile-pic.png'; // Import image
import AnimatedHeader from './AnimatedHeader';
import LinkedInIcon from './images/linkdin.png'; // Import LinkedIn icon
import GitHubIcon from './images/github.png'; // Import GitHub icon
import Button from './Button';

function About() {
  return (
    <div className="About">
      <div className="text">
        <div className="icon-header-container">
          <a href="https://www.linkedin.com/in/ahmad-raza416" target="_blank" rel="noopener noreferrer">
            <img src={LinkedInIcon} alt="LinkedIn icon" />
          </a>
          <AnimatedHeader />
        </div>
        
        <div className="icon-header-container">
          <a href="https://github.com/AhmadRazaCodeBits" target="_blank" rel="noopener noreferrer">
            <img src={GitHubIcon} alt="GitHub icon" />
          </a>
          <h2>MERN Stack Developer</h2>
        </div>
        <p>
          I am a passionate and experienced MERN stack developer with a strong
          foundation in building dynamic and scalable web applications. With a
          keen eye for detail and a deep understanding of modern web
          development technologies, I strive to create intuitive and efficient
          solutions that meet the needs of both users and businesses.
        </p>
        <Button
          title="Download CV"
          downloadUrl="https://drive.google.com/file/d/1wm4EriHIwxSA8GJSZHZguPTcjYnrbnLD/view?usp=drive_link"
          fileName="Ahmad Raza CV"
        />
      </div>
      <div className="image">
        <img src={pic} alt="Profile pic" />
      </div>
    </div>
  );
}

export default About;
