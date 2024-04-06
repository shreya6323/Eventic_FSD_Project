// // ProductDetailPage.js
// import React, { useState } from 'react';
// import './ProductDetails.css';
// import SeatSelectionModal from './SeatSelection';
// import Button from './Button';
// import { CalendarToday, AccessTime, Receipt , AttachMoney} from '@mui/icons-material'; 
// import LocationOnIcon from '@mui/icons-material/LocationOn';
// // Import Material icons
// const ProductDetailPage = ({ event }) => {
//   const { poster, eventname, eventDate, eventTime, location, description, price } = event;
//   const [showModal, setShowModal] = useState(false);
//   const handleBookNow = () => {
//     setShowModal(true);
//   };

//   return (
    
//      <div className="product-detail-container">
//       <div className="product-detail-image">
//         <img src={`data:image/png;base64,${event.poster}`}  alt={eventname} />
//       </div>
//       <div className="product-detail-info">
//       <p className="heading">{eventname}</p>
//       <p><CalendarToday className="icons" style={{ fontSize: '42px' }} />{eventDate}</p>
//         <p><AccessTime className="icons" style={{ fontSize: '42px' }} />{eventTime}</p>
//         <p><LocationOnIcon className="icons" style={{ fontSize: '42px' }} />{location}</p>
//         <p><Receipt className="icons" style={{ fontSize: '42px' }} />{description}</p>
//         <p><AttachMoney className="icons" style={{ fontSize: '42px' }} />{price}</p>
//         <Button  onClick={handleBookNow} text="Book Ticket"/>
//         {showModal && <SeatSelectionModal onClose={() => setShowModal(false)} />}
    
//       </div>
//        </div>
       
    
//   );
// };

// export default ProductDetailPage;
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import './ProductDetails.css';
import SeatSelectionModal from './SeatSelection';
import Button from './Button';
import { CalendarToday, AccessTime, Receipt, AttachMoney } from '@mui/icons-material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { useParams } from 'react-router-dom';



const ProductDetailPage = ({ event }) => {
  const { poster, eventname, eventDate, eventTime, location, description, price } = event;
  const [showModal, setShowModal] = useState(false);
  const {admin} = useParams();
  const [orderId,setOrderId] = useState('');
  const navigate = useNavigate();
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day}-${month}-${year}`;
  };



  const generateTicket = () => {
    
    const username =  localStorage.getItem('token');
  // const eventname = localStorage.getItem('eventName'); // Replace 'exampleUsername' with the actual username
   const apiUrl = `/api/tickets/${username}/${eventname}`;
  
    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Specify content type as JSON
      },
      
      body: JSON.stringify({}),
    })
      .then(async response => {


        if (!response.ok) {
          throw new Error('Failed to book ticket');
        }


        const data = await response.json();
        console.log(data.event.eventname);
        // history.push({
        //   pathname: '/ticket',
        //   state: {data},
        // });
        console.log('Ticket booked successfully!');
        navigate('/ticket', { state: { data } });
        
        // If the request is successful, you can show a success message or perform any other action
        // You can also close the modal if needed
        // setShowModal(false);
      })
      .catch(error => {
        // If there's an error, you can handle it accordingly
        console.error('Error booking ticket:', error);
        // You can show an error message to the user
      });
  };


  


  const makePayment = (orderId) => {
    console.log(orderId);
    // Once the order is created, initiate the payment process
    if (orderId) {
      // Use Razorpay SDK or API to initiate payment
      // Example: You can open Razorpay checkout form
      const options = {
        key: 'rzp_test_yN4QiPyuTxoTfN', // Replace with your Razorpay key ID
        amount: {price}, // Amount in paise (e.g., 1000 for ₹10)
        currency: 'INR',
        name:'Eventic',
        description:'Event Ticket Transaction',

        order_id: orderId,
        handler: function(response) {
          console.log('Payment successful:', response);
          generateTicket();
          // Handle successful payment (e.g., update UI, redirect user)
        },
        prefill: {
          name: '', // Pre-fill customer details if needed
          email: '',
          contact: '',
        },
        theme:{
          "color":"adb0ea"
        }
      };
      const rzp = new window.Razorpay(options);
      rzp.open(); // Open Razorpay checkout form
    } else {
      console.error('Order ID is missing.');
    }
  };



  const handleBookNow =  () => {
if(price !== 0){
    const url = `/api/pay/${price}`;

//     fetch(url, {
//       method: 'GET', // or 'POST' depending on your server route
//       headers: {
//         'Content-Type': 'application/json', // Specify content type as JSON if needed
//         // Include any other headers as needed
//       },
//     })
//       .then(response => {
//         if (!response.ok) {

//           throw new Error('Failed to make order');
//         }
// else{
//   const data = response.json(); // Extract JSON data from the response
//   const orderIdFromResponse = data.orderId; 
//          makePayment(orderIdFromResponse);
//         // Handle successful payment response
//         console.log('Order created successful');
// }
//       })
//       .catch(error => {
//         // Handle errors
//         console.error('Error making payment:', error);
//       });
//   }; 
       fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to make order');
        }
        return response.text(); // Parse the JSON response
      })
      .then(data => {
        setOrderId(data); // Set the order ID received from the response
        makePayment(data); // Initiate the payment process
      })
      .catch(error => {
        console.error('Error making payment:', error);
      });


}
else{
  generateTicket();
}
  
};
  return (
    <div className="product-detail-container">
      <div className="product-detail-image">
        <img src={`data:image/png;base64,${poster}`} alt={eventname} />
      </div>
      <div className="product-detail-info">
        <p className="heading">{eventname}</p>
        <p><CalendarToday className="icons" style={{ fontSize: '42px' }} />{formatDate(eventDate)}</p>
        <p><AccessTime className="icons" style={{ fontSize: '42px' }} />{eventTime}</p>
        <p><LocationOnIcon className="icons" style={{ fontSize: '42px' }} />{location}</p>
        <p><Receipt className="icons" style={{ fontSize: '42px' }} />{description}</p>
        <p><AttachMoney className="icons" style={{ fontSize: '42px' }} />Rs .{price}</p>
     {admin !== 'eventic' &&   <Button onClick={handleBookNow} text="Book Ticket" />}
        {/* {showModal && <SeatSelectionModal onClose={() => setShowModal(false)} />} */}
      </div>
    </div>
  );
};

export default ProductDetailPage;

