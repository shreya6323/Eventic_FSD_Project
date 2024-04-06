import React from 'react';
import Typewriter from './TypeWrite'; // Replace with the actual import path
 // Replace with the actual import path
import Video from './Video';
import './Home.css'; // Add any additional styles specific to the Home component

const Home = () => {
  return (
    <div className="home-container">
      <Video />
      <Typewriter />
    </div>
  );
};

export default Home;
