import React, { useEffect } from 'react';
import lottie from 'lottie-web';
import loaderAnimation from '../assets/loader.json'; // Import your Lottie animation JSON file

const Loader = () => {
  useEffect(() => {
    const container = document.getElementById('loader-container');

    // Load the Lottie animation
    const animation = lottie.loadAnimation({
      container: container,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: loaderAnimation, // Lottie animation JSON data
    });

    // Clean up function to destroy the animation when the component unmounts
    return () => {
      animation.destroy();
    };
  }, []);

  return (
    <div id="loader-container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      {/* Placeholder for the Lottie animation */}
    </div>
  );
};

export default Loader;
