// // import React from 'react';
// // import './Ticket.css'; // Import CSS file for styling
// // import { IonIcon } from '@ionic/react';
// // import { ticketOutline } from 'ionicons/icons';
// // // import qrcode from'../assets/qrcode.png';
// // import { useLocation } from 'react-router-dom';
// // import lottie from 'lottie-web';
// // import animationData from '../assets/confetti.json'; // Replace with the path to your Lottie animation JSON file

// // const Ticket = () => {

// //   const location = useLocation();

// //   // Access data from location.state
// //   const { data } = location.state;

// //   return (

// //     <div className="ticket">
// // <div className='eventic-container'>
// //     <span className='eventic-logo-name'>Eventic</span>
// //     </div>
// //       <div className="ticket-header">{data.user.userName}</div>
// //       <div className="ticket-details">
// //         <div className="detail-row">
// //           <span className="detail-label">&#127881;</span>
// //           <span className="detail-value">{data.event.eventname}</span>
// //         </div>
// //         <div className="detail-row">
// //           <span className="detail-label">&#128197;</span>
// //           <span className="detail-value">{data.event.eventDate} {data.event.eventTime}</span>
// //         </div>
// //         <div className="detail-row">
// //           <span className="detail-label">&#128205;</span>
// //           <span className="detail-value">{data.event.location}</span>
// //         </div>
        
// //         <div className="detail-row">
// //           <span className="detail-label">&#128176;</span>
// //           <span className="detail-value">Rs {data.event.price}</span>
// //         </div>
      
// //       </div>
// //       <div className="qr-code-container">
// //         <div className="qr-code"><img src={`data:image/png;base64,${data.qrcode}`} alt="qrcode"/></div>
// //       </div>
     
      
// //     </div>

   
   
// //   );
// // };

// // export default Ticket;
// // // import React, { useEffect } from 'react';
// // // import './Ticket.css'; // Import CSS file for styling
// // // import './SuccessfulBooking.css';
// // // import { IonIcon } from '@ionic/react';
// // // import { ticketOutline } from 'ionicons/icons';
// // // import qrcode from '../assets/qrcode.png';
// // // import { useLocation } from 'react-router-dom';
// // // import lottie from 'lottie-web';
// // // import animationData from '../assets/confetti.json'; // Replace with the path to your Lottie animation JSON file


// // // const Ticket = () => {
// // //   useEffect(() => {
// // //     // Create a lottie animation instance for left confetti
// // //     const animationLeft = lottie.loadAnimation({
// // //       container: document.getElementById('confetti-container-left'), // Replace with the ID of the left container element
// // //       renderer: 'svg', // Use 'svg' for better compatibility
// // //       loop: true,
// // //       autoplay: true,
// // //       animationData: animationData,
// // //     });

// // //     // Create a lottie animation instance for right confetti
// // //     const animationRight = lottie.loadAnimation({
// // //       container: document.getElementById('confetti-container-right'), // Replace with the ID of the right container element
// // //       renderer: 'svg', // Use 'svg' for better compatibility
// // //       loop: true,
// // //       autoplay: true,
// // //       animationData: animationData,
// // //     });

// // //     return () => {
// // //       animationLeft.destroy();
// // //       animationRight.destroy();
// // //     };
// // //   }, []);

// // //   const location = useLocation();

// // //   // Access data from location.state
// // //   const { data } = location.state;

// // //   return (
// // //     <div>
// // //       <div className="confetti-container" id="confetti-container-left" style={{ position: 'absolute', top: 0, left: 0, width: '50%', height: '100%', zIndex: 2 }} />
// // //       <div className="container">
// // //         <div className="ticket">
// // //           <span className='logo'>
// // //             <IonIcon icon={ticketOutline} size="large" className='eventic_logo' />
// // //             <span className="logo">Eventic</span>
// // //           </span>
// // //           <div className="ticket-header">{data.user.userName}</div>
// // //           <div className="ticket-details">
// // //             <div className="detail-row">
// // //               <span className="detail-label">&#127881;</span>
// // //               <span className="detail-value">{data.event.eventname}</span>
// // //             </div>
// // //             <div className="detail-row">
// // //               <span className="detail-label">&#128197;</span>
// // //               <span className="detail-value">{data.event.eventDate} {data.event.eventTime}</span>
// // //             </div>
// // //             <div className="detail-row">
// // //               <span className="detail-label">&#128205;</span>
// // //               <span className="detail-value">{data.event.location}</span>
// // //             </div>
// // //             <div className="detail-row">
// // //               <span className="detail-label">&#128176;</span>
// // //               <span className="detail-value">Rs {data.event.price}</span>
// // //             </div>
// // //           </div>
// // //           <div className="qr-code-container">
// // //             <div className="qr-code"><img src={qrcode} alt="qrcode" /></div>
// // //           </div>
// // //         </div>
// // //         <button className="button">Download</button>
// // //       </div>
// // //       <div className="confetti-container" id="confetti-container-right" style={{ position: 'absolute', top: 0, right: 0, width: '50%', height: '100%', zIndex: 2 }} />
// // //     </div>
// // //   );
// // // };

// // // export default Ticket;




// // import React, { useState, useEffect } from 'react';
// // import { useLocation } from 'react-router-dom';
// // import html2canvas from 'html2canvas'; // Import html2canvas library
// // import './Ticket.css'; // Import CSS file for styling

// // const Ticket = () => {
// //   const location = useLocation();
// //   const data = location.state?.data;

// //   const [emailSent, setEmailSent] = useState(false);

// //   useEffect(() => {
// //     if (data) {
// //       // Capture the ticket element as an image
// //       const ticketElement = document.getElementById('ticket-container');
// //       html2canvas(ticketElement).then(canvas => {
// //         canvas.toBlob(blob => {
// //           const formData = new FormData();
// //           formData.append('recipientEmail', data.user.email); // Replace with the recipient's email
// //           formData.append('ticketImage', blob, 'ticket.png'); // Pass ticket image blob to the backend

// //           // Send the ticket image to the backend
// //           fetch('/api/send-email', {
// //             method: 'POST',
// //             body: formData
// //           })
// //           .then(response => {
// //             if (response.ok) {
// //               setEmailSent(true);
// //             } else {
// //               throw new Error('Failed to send email');
// //             }
// //           })
// //           .catch(error => {
// //             console.error('Error sending email:', error);
// //           });
// //         }, 'image/png');
// //       });
// //     }
// //   }, [data]); // Run this effect when the `data` object changes

// //   return (
// //     <div id="ticket-container" className="ticket">
// //       <div className='eventic-container'>
// //         <span className='eventic-logo-name'>Eventic</span>
// //       </div>
// //       {data ? (
// //         <>
// //           <div className="ticket-header">{data.user.userName}</div>
// //           <div className="ticket-details">
// //             <div className="detail-row">
// //               <span className="detail-label">&#127881;</span>
// //               <span className="detail-value">{data.event.eventname}</span>
// //             </div>
// //             <div className="detail-row">
// //               <span className="detail-label">&#128197;</span>
// //               <span className="detail-value">{data.event.eventDate} {data.event.eventTime}</span>
// //             </div>
// //             <div className="detail-row">
// //               <span className="detail-label">&#128205;</span>
// //               <span className="detail-value">{data.event.location}</span>
// //             </div>
// //             <div className="detail-row">
// //               <span className="detail-label">&#128176;</span>
// //               <span className="detail-value">Rs {data.event.price}</span>
// //             </div>
// //           </div>
// //           <div className="qr-code-container">
// //             <div className="qr-code"><img src={`data:image/png;base64,${data.qrcode}`} alt="qrcode"/></div>
// //           </div>
// //           {/* Display message after email is sent */}
// //           {emailSent && <p>Ticket sent successfully!</p>}
// //                   <button className="button">Download</button>

// //         </>
// //       ) : (
// //         <p>No data available</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default Ticket;



import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import html2canvas from 'html2canvas'; // Import html2canvas library
import './Ticket.css'; // Import CSS file for styling
import Navbar from './Navbar';
import Button from './Button';

const Ticket = () => {
  const location = useLocation();
  const data = location.state?.data;
  const[year,setYear] = useState(false);
  const[month,setMonth] = useState(false);
  const[day,setDay] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  useEffect(() => {
    if (data) {
      // Capture the ticket element as an image
      const ticketElement = document.getElementById('ticket-container');
      const eventDate = data.event.eventDate;

// Parse the event date string
const parsedDate = new Date(eventDate);

// Get the day, month, and year
  const day = parsedDate.getDate();
const month = parsedDate.getMonth() + 1; // January is 0
  const year = parsedDate.getFullYear();
setYear(year);
// Add leading zeros if necessary
  const formattedDay = (day < 10 ? '0' : '') + day;
  const formattedMonth = (month < 10 ? '0' : '') + month;
setMonth(formattedMonth);
setDay(formattedDay);
// Format the date as dd-mm-yyyy

      html2canvas(ticketElement).then(canvas => {
        canvas.toBlob(blob => {
          const formData = new FormData();
          formData.append('recipientEmail', data.user.email); // Replace with the recipient's email
          formData.append('ticketImage', blob, 'ticket.png'); // Pass ticket image blob to the backend

          // Send the ticket image to the backend
          fetch('/api/send-email', {
            method: 'POST',
            body: formData
          })
          .then(response => {
            if (response.ok) {
              setEmailSent(true);
            } else {
              throw new Error('Failed to send email');
            }
          })
          .catch(error => {
            console.error('Error sending email:', error);
          });
        }, 'image/png');
      });
    }
  }, [data]); // Run this effect when the `data` object changes

  // Function to handle downloading the ticket

  const handleHome = () => {
    // Navigate to the home page
    console.log("home");
    window.location.href ='/'; // Replace '/' with the actual path of your home page
  };


const handleDownload = () => {
  console.log("Button clicked"); // Check if this log appears in the console

  const ticketContainer = document.getElementById('ticket-container');

  if (!ticketContainer) {
    console.error("Ticket container not found.");
    return;
  }

  // Use html2canvas to capture the content of the ticket container
  html2canvas(ticketContainer).then(canvas => {
    // Convert canvas to data URL
    const image = canvas.toDataURL('image/png');

    // Create a temporary link element to trigger the download
    const link = document.createElement('a');
    link.href = image;
    link.download = 'ticket.png';
    link.click();
  }).catch(error => {
    console.error("Error capturing ticket content:", error);
  });
};

  return (
    <>  

    <div id="ticket-container" className="ticket">
      <div className='eventic-container'>
        <span className='eventic-logo-name'>Eventic</span>
      </div>
      {data ?(
        <>
     
          <div className="ticket-header">{data.user.userName}</div>
          <div className="ticket-details">
            <div className="detail-row">
              <span className="detail-label">&#127881;</span>
              <span className="detail-value">{data.event.eventname}</span>
            </div>
            
            <div className="detail-row">
              <span className="detail-label">&#128197;</span>
              <span className="detail-value">{new Date(data.event.eventDate).toLocaleDateString()} {data.event.eventTime}</span>

            </div>
            <div className="detail-row">
              <span className="detail-label">&#128205;</span>
              <span className="detail-value">{data.event.location}</span>
            </div>
            <div className="detail-row">
              <span className="detail-label">&#128176;</span>
              <span className="detail-value">Rs {data.event.price}</span>
            </div>
          </div>
          <div className="qr-code-container">
            <div className="qr-code"><img src={`data:image/png;base64,${data.qrcode}`} alt="qrcode"/></div>
          </div>
        {/* Display message after email is sent */}
      
          {/* Download button */}
         
        </>
      ) : (
        <p>No data available</p>
      )}
    </div>
    {data && <p>Ticket sent successfully!</p> &&
   <button className="button" onClick={handleDownload}>Download</button>   }   <button className="button" onClick={handleHome}>Home</button> 
         
          
    </>
  );
};

export default Ticket;
