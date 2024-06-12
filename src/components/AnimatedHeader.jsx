import React, { useState, useEffect } from 'react';
import './AnimatedHeader.css'; // Import CSS file

function AnimatedHeader() {
  const [letters, setLetters] = useState([
    'I', "'", 'm', '  ','  ', 'A', 'h', 'm', 'a', 'd', ' ', 'R', 'a', 'z', 'a'
  ]);
  const [animatedLetters, setAnimatedLetters] = useState([]);
  const staticLetters = ['H', 'i',' ', ',']; // Static letters

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAnimatedLetters([]);
      setTimeout(() => {
        setAnimatedLetters(letters);
      }, 10); // Short delay before starting animation
    }, letters.length * 100 + 10); // Repeat animation after the duration of one animation loop

    return () => clearInterval(intervalId); // Clear interval on component unmount
  }, [letters]);

  return (
    <h1 className="animated-header">
      {staticLetters.map((letter, index) => (
        <span key={index} className={`animated-letter-${index}`}>{letter}</span>
      ))}
      {animatedLetters.map((letter, index) => (
        <span key={index + staticLetters.length} className={`animated-letter-${index + staticLetters.length}`}>{letter}</span>
      ))}
    </h1>
  );
}

export default AnimatedHeader;
