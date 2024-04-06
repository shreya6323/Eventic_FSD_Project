import React, { useEffect } from 'react';
import lottie from 'lottie-web';
import animationData from '../../assets/TicketFail-pink.json';
import './Basic.css';
import Button from '../Button';
const TicketFail = () => {
  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: document.getElementById('lottie-container'),
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    return () => animation.destroy();
  }, []);

  return (
    <>
    <div id="container">
    <div id="lottie-container" /> 
    <span className="message">Ticket does not exist !</span> 

  <Button text="Try Again"/>


    </div>
    </>
  );
};

export default TicketFail;
