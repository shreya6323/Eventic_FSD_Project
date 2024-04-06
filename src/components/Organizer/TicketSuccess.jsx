import React, { useEffect } from 'react';
import lottie from 'lottie-web';
import animationData from '../../assets/TicketSuccess-blue.json';
import './Basic.css';

const TicketSuccess = () => {
  useEffect(() => {
    const animation = lottie.loadAnimation({
      container: document.getElementById('lottie-container'),
      renderer:'svg',
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    return () => animation.destroy();
  }, []);
return(
  <>
    <div id="container">
    <div id="lottie-container" /> 
    <span className="message">Welcome, Attendeee !</span> 




    </div>
    </>)
};

export default TicketSuccess;
