import React from 'react';
import './Button.css';

function Button(props) {
  const handleClick = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = props.downloadUrl; // Set the download URL
    link.download = props.fileName; // Set the file name for download
    // Trigger a click event on the link element
    link.click();
  };

  return (
    <div className="ButtonContainer">
     
      <button onClick={handleClick}>{props.title}</button>
    </div>
  );
}

export default Button;
