import React from 'react';
import './Qualification.css';

function Qualification() {
  return (
    <div className="Container">
      <h1 className="heading center blue">My Education</h1>
      <div className="education">
        <div className="education-info">
          <h1 className="education-h1">BSc Computer Science <span className="date">From (2020 - 2024)</span></h1>
          <h3 className="education-h2"><a href="http://www.uet.edu.pk" target="_blank" rel="noopener noreferrer">University of Engineering and Technology, Lahore</a></h3>
        </div>
      </div>
    </div>
  );
}

export default Qualification;
