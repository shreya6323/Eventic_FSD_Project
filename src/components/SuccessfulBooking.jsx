// import React, { useEffect } from 'react';
// import lottie from 'lottie-web';
// import animationData from '../assets/confetti.json'; // Replace with the path to your Lottie animation JSON file
// import Ticket from './Ticket';
// import html2canvas from 'html2canvas';
// import './SuccessfulBooking.css';
// import Button from './Button';
// const SuccessfulBooking = () => {
//   useEffect(() => {
//     // Create a lottie animation instance for left confetti
//     const animationLeft = lottie.loadAnimation({
//       container: document.getElementById('confetti-container-left'), // Replace with the ID of the left container element
//       renderer: 'svg', // Use 'svg' for better compatibility
//       loop: true,
//       autoplay: true,
//       animationData: animationData,
//     });





//     // Create a lottie animation instance for right confetti
//     const animationRight = lottie.loadAnimation({
//       container: document.getElementById('confetti-container-right'), // Replace with the ID of the right container element
//       renderer: 'svg', // Use 'svg' for better compatibility
//       loop: true,
//       autoplay: true,
//       animationData: animationData,
//     });

//     // Clean up the animations when the component is unmounted
//     return () => {
//       animationLeft.destroy();
//       animationRight.destroy();
//     };
//   }, []);


// const handleDownload = () => {
//   const ticketContainer = document.querySelector('.container');


//   // Use html2canvas to capture the content of the ticket container
//   html2canvas(ticketContainer).then(canvas => {
//     // Convert canvas to data URL
//     const image = canvas.toDataURL('image/png');

//     // Create a temporary link element to trigger the download
//     const link = document.createElement('a');
//     link.href = image;
//     link.download = 'ticket.png';
//     link.click();
//   });
// };

//   return (
//     <>
//     <div className="confetti-container" id="confetti-container-left" style={{ position: 'absolute', top: 0, left: 0, width: '50%', height: '100%', zIndex: 2 }} />
//     <div className="container">
//       <Ticket />
//       <Button text='Download' onClick={handleDownload}></Button>
    
    
//     </div>
//     <div className="confetti-container" id="confetti-container-right" style={{ position: 'absolute', top: 0, right: 0, width: '50%', height: '100%', zIndex: 2 }} />
//     </>
//   );
// };

// export default SuccessfulBooking;







import React, { useEffect } from 'react';
import lottie from 'lottie-web';
import animationData from '../assets/confetti.json'; // Replace with the path to your Lottie animation JSON file
import Ticket from './Ticket';
import html2canvas from 'html2canvas';
import './SuccessfulBooking.css';

const SuccessfulBooking = () => {
  useEffect(() => {
    // Create a lottie animation instance for left confetti
    const animationLeft = lottie.loadAnimation({
      container: document.getElementById('confetti-container-left'), // Replace with the ID of the left container element
      renderer: 'svg', // Use 'svg' for better compatibility
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    // Create a lottie animation instance for right confetti
    const animationRight = lottie.loadAnimation({
      container: document.getElementById('confetti-container-right'), // Replace with the ID of the right container element
      renderer: 'svg', // Use 'svg' for better compatibility
      loop: true,
      autoplay: true,
      animationData: animationData,
    });

    // Clean up the animations when the component is unmounted
    return () => {
      animationLeft.destroy();
      animationRight.destroy();
    };
  }, []);
  

  return (
    <>
      <div className="confetti-container" id="confetti-container-left" style={{ position: 'absolute', top: 0, left: 0, width: '50%', height: '100%', zIndex: 2 }} />
      <div className="container">
        <Ticket />
        {/* Standard HTML button element */}
      </div>
      <div className="confetti-container" id="confetti-container-right" style={{ position: 'absolute', top: 0, right: 0, width: '50%', height: '100%', zIndex: 2 }} />
    </>
  );
};

export default SuccessfulBooking;
