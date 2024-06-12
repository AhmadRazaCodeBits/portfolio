import React from 'react';
import './Skill.css';

function Skill() {
  return (
    <div className="SkillContainer">
      <h1>My Skills</h1>
      <div className="container">
        <div className="skillSet">
          <h2>Front-End</h2>
          <ul>
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/HTML" target='_blank'>HTML</a></li>
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/CSS" target='_blank'>CSS3</a></li>
            <li><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target='_blank'>JavaScript</a></li>
            <li><a href="https://reactjs.org/docs/getting-started.html" target='_blank'>React js</a></li>
          </ul>
        </div>
        <div className="skillSet">
          <h2>Back-end</h2>
          <ul>
            <li><a href="https://nodejs.org/en/docs/" target='_blank'>NodeJS</a></li>
            <li><a href="https://expressjs.com/" target='_blank'>ExpressJS</a></li>
          </ul>
        </div>
        <div className="skillSet">
          <h2>Database</h2>
          <ul>
            <li><a href="https://docs.mongodb.com/" target='_blank'>MongoDb</a></li>
            <li><a href="https://dev.mysql.com/doc/" target='_blank'>MySql</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skill;
