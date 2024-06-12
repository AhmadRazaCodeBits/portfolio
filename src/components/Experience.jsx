import React from 'react';
import './Experience.css';

function Experience(props) {
  return (
    <div className="experience">
      <h1>Experience</h1>
      <div className="company">
        <a href={props.certificateUrl} target="_blank" rel="noopener noreferrer">Check Certificate</a>
        <h1>{props.company}</h1>
        <div className="row">
          <h4>{props.subheading}</h4>
          <h4>{props.duration}</h4>
        </div>
        <ul>
        {props.listContent.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      </div>
     
    </div>
  );
}

export default Experience;
