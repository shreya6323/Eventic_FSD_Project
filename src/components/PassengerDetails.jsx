import React, { useState } from 'react';
import './PassengerDetails.css';
import { useLocation } from 'react-router-dom';
import Button from './Button';
const PassengerDetails = () => {
  const location = useLocation();
  const [passengerDetails, setPassengerDetails] = useState(Array(Number(location.search.slice(7))).fill({ name: '', email: '' }));

  const handleInputChange = (index, field, value) => {
    const updatedPassengerDetails = [...passengerDetails];
    updatedPassengerDetails[index][field] = value;
    setPassengerDetails(updatedPassengerDetails);
  };

  const handleConfirmPayment = () => {
    // Add functionality to handle payment
    console.log('Passenger details:', passengerDetails);
  };

 
  

  return (
    <div className="passenger-details-container">
    <div className="passenger-details-card">
      <p className='heading'>Attendee Info.</p>
      {passengerDetails.map((passenger, index) => (
        <div key={index} className="passenger-inputs">
          <input
            type="text"
            placeholder={`Passenger ${index + 1} Name`}
            value={passenger.name}
            onChange={(e) => handleInputChange(index, 'name', e.target.value)}
          />
          <input
            type="email"
            placeholder={`Passenger ${index + 1} Email`}
            value={passenger.email}
            onChange={(e) => handleInputChange(index, 'email', e.target.value)}
          />
        </div>
      ))}
      <div className='btn-container'>
      {/* <button type="submit" className="outlined-btn">Proceed to Payment</button> */}
      <Button onClick={handleConfirmPayment} text="Proceed to Payment" />
      </div>
    </div>
    </div>
  );
};

export default PassengerDetails;