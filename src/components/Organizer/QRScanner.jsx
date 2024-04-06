import React, { useState } from 'react';
import QrReader from 'react-qr-reader';
 import './QRScanner.css';
import Sidebar from './Sidebar';
import { IonIcon } from '@ionic/react';

import { ticketOutline } from 'ionicons/icons';
const QRScannerPage = () => {
  const [result, setResult] = useState('');
  
  // useEffect(() => {
  //   if (result) {
  //     fetchTicketData(result); // Call a function to fetch ticket data when result changes
  //   }
  // }, [result]);

  const handleScan = data => {
    if (data) {
      setResult(data);
     // console.log(data);
      fetchTicketData(data);
    }
  };

  const fetchTicketData = async (result) => {
    try {
     const eventname = localStorage.getItem('eventName');
      const response = await fetch(`/api/tickets/${result}/${eventname}`);
    //  console.log(response);
       setResult(''); // Replace with your backend API endpoint
      if (!response.ok) {
       
      window.location.href='/TicketFail';
      //  throw new Error('Failed to fetch ticket data');
      }
      else{
      window.location.href='/TicketSuccess';
      }
    
    } catch (error) {
      console.error(error);
      // Handle error
    }
  };


  const handleError = err => {
    console.error(err);
  };

  return (
    <>
     <Sidebar  />
     <div className ="bar">

<span className='logo-container'>
             <IonIcon icon={ticketOutline} size="large" className='eventic-logo' />
             <span className="logo">Eventic</span>
</span>

     <div>    Ticket Scanner    </div></div>
    <div className="scanner-container">
       <div className='inst'></div> 
      <div className="scanner-wrapper">
      
        {/* <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
         className='qrreader'
        //   style={{ width: '300px', height: '300px', borderRadius: '10px' }}
        /> */}
  
      {!result && <QrReader
            delay={100}
            onError={handleError}
          onScan={handleScan}
            className='qrreader'
            //onResult={handleScan} // Add the onResult prop
          />}

      </div>
      {/* <p>Scanned Result: {result}</p> */}
    </div>
    </>
  );
};

export default QRScannerPage;



// import React, { useState } from 'react';
// import { QrReader } from 'react-qr-reader';
// import Sidebar from './Sidebar';
// import { IonIcon } from '@ionic/react';
// import { useNavigate } from 'react-router-dom';
// import { ticketOutline } from 'ionicons/icons';

// const QRScannerPage = () => {
//   const [result, setResult] = useState('');
//   const [scanning, setScanning] = useState(true); // State to control scanning

//   const handleScan = data => {
//     if (data) {
//       setResult(data);
//       console.log(data);
//       fetchTicketData(data);
//       setScanning(false); // Disable scanning after first successful scan
//     }
//   };

//   const fetchTicketData = async (result) => {
//     try {
//       const response = await fetch(`/api/tickets/${result}`);
//       console.log(response);
//       if (!response.ok) {
//         window.location.href='/TicketFail';
//       } else {
//         window.location.href='/TicketSuccess';
//       }
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   const handleError = err => {
//     console.error(err);
//   };

//   return (
//     <>
//       <Sidebar />
//       <div className="bar">
//         <span className='logo-container'>
//           <IonIcon icon={ticketOutline} size="large" className='eventic-logo' />
//           <span className="logo">Eventic</span>
//         </span>
//         <div>Ticket Scanner</div>
//       </div>
//       <div className="scanner-container">
//         <div className="scanner-wrapper">
//           {/* Render QR scanner only if scanning is enabled */}
//           {scanning && (
//             <QrReader
//               delay={100}
//               onError={handleError}
//               onScan={handleScan}
//               className='qrreader'
//               onResult={handleScan}
//             />
//           )}
//         </div>
//       </div>
//     </>
//   );
// };

// export default QRScannerPage;

