import React, { useState } from 'react';
import './SeatSelection.css';
import { useNavigate } from 'react-router-dom';
import Button from './Button';
const SeatSelection = ({ onClose }) => {
  const [selectedSeats, setSelectedSeats] = useState(1);
  const navigate = useNavigate();

  const handleSeatSelection = (seats) => {
    setSelectedSeats(seats);
  };

  const handleConfirmSeats = () => {
    // Redirect to passenger details page
    navigate(`/passenger-details?seats=${selectedSeats}`);
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close-button" onClick={onClose}>&times;</span>
        <p className='headings'>How many seats ?</p>
        <div className="seat-buttons">
          {[...Array(10)].map((_, index) => (
            <button
              key={index}
              onClick={() => handleSeatSelection(index + 1)}
              className={selectedSeats === index + 1 ? "selected" : ""}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <Button  onClick={handleConfirmSeats}  text="Confirm Seats"/>
       
      </div>
    </div>
  );
};

export default SeatSelection;