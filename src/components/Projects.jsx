import React, { useState } from 'react';
import './Projects.css'; // Assume you have CSS for styling
import Ecommerce from './images/ecommerce.jpeg';
import Weather from './images/weather.jpeg';
import Blog from './images/blog.jpeg';
import GitHubIcon from './images/github.png'; // Assuming you have an icon for GitHub

function Projects() {
  const [cards, setCards] = useState([
    {
      id: 1,
      picture: Ecommerce,
      title: 'Ecommerce Website',
      githubLink: 'https://github.com/ecommerce',
      livePreviewLink: 'https://ecommerce.com'
    },
    {
      id: 2,
      picture: Blog,
      title: 'Blogging Website',
      githubLink: 'https://github.com/blog',
      livePreviewLink: 'https://blog.com'
    },
    {
      id: 3,
      picture: Weather,
      title: 'Weather Website',
      githubLink: 'https://github.com/weather',
      livePreviewLink: 'https://weather.com'
    }
  ]);

  return (
    <><div className="heading">
          <h1>Projects</h1>
    </div>
   
    <div className="container">
      
      {cards.map(card => (
        <div className="card" key={card.id}>
          <a href={card.githubLink}> <img src={card.picture} alt={card.title} /></a>
          <h2><a href={card.livePreviewLink}>{card.title}</a></h2>
          <div className="links">
            <a href={card.githubLink}><img src={GitHubIcon} alt="GitHub" />Github</a>
            <a href={card.livePreviewLink}>Live Preview</a>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default Projects;
