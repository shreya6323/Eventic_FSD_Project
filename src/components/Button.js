import React from 'react';
import './Button.css'; // Import the CSS file

const Button = ({ text, onClick }) => {

  return (
    <button className="outlined-button" onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
