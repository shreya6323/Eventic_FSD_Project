// import React, { useState } from 'react';
// // import './SeatSelection.css';
// import { useNavigate } from 'react-router-dom';
// import Button from './Button';
// const DeleteModal = ({ onClose }) => {
// //   const [selectedSeats, setSelectedSeats] = useState(1);
//   const navigate = useNavigate();

  

//   const handleDelete = () => {
//     // Redirect to passenger details page
//    console.log('deleted !');
//   };

//   return (
//     <div className="modal">
//       <div className="modal-content">
//         <span className="close-button" onClick={onClose}>&times;</span>
//         <p className='headings'>Are you sure you want to delete the image ?</p>
      
//         <Button  onClick={handleDelete}  text="Delete"/>
       
//       </div>
//     </div>
//   );
// };

// export default DeleteModal;

import React from 'react';
import Button from '../Button';

const DeleteModal = ({ onClose, onDelete, message }) => {
  const handleDelete = () => {
    onDelete(); // Call the onDelete method passed as prop
    onClose(); // Close the modal after deletion
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <p className='headings'>{message}</p>
        <Button onClick={handleDelete} text="Delete" />
      </div>
    </div>
  );
};

export default DeleteModal;
