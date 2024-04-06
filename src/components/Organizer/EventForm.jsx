


import React, { useState } from 'react';
import Button from '../Button';
const EventForm = () => {
  const [formData, setFormData] = useState({
    eventname: '',
    location: '',
    category: '',
    eventDate: '',
    eventTime: '',
    price: '',
    description: '',
    poster: '', // Base64 encoded image data will be stored here
    seats: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem('token');

      const response = await fetch(`/api/admin/add-event`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Include token in the Authorization header
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({  // Clear form fields upon successful submission
          eventname: '',
          location: '',
          category: '',
          eventDate: '',
          eventTime: '',
          price: '',
          description: '',
          poster: '',
          seats: ''
        });

        alert('Event added successfully!');
        window.href='/admin-home';
      } else {
        alert('Failed to add event. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result.split(',')[1]; // Extracting base64 data
      setFormData({
        ...formData,
        poster: base64String // Set base64String to the poster field in formData
      });
    };
    reader.readAsDataURL(file);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  

  return (
    <>
    
    <div className='header'>Event Registration</div>

    <div className="container">
      <div className="form-wrapper sign-up">
      <form className="form" onSubmit={handleSubmit}>
       
        <div className="input-group">
        <input
          type="text"
          
          name="eventname"
          value={formData.eventname}
          onChange={handleChange}
          required
        />
        <label>EventName</label>
        </div>
        <div className="input-group">

        <input
          type="text"
          
          name="location"
          value={formData.location}
          onChange={handleChange}
          required
        />
        <label>Location</label>
        </div>
        <div className="input-group">

        <input
          type="text"
          
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
        />
        <label>Category</label>
        </div>
        <div className="input-group">
     

        <input
          type="date"
          
          name="eventDate"
          value={formData.eventDate}
          onChange={handleChange}
          required
        />
        </div>
        <div className="input-group">

        <input
          type="time"
          
          name="eventTime"
          value={formData.eventTime}
          onChange={handleChange}
          required
       
        />
      
        </div>
        <div className="input-group">

        <input
          type="text"
          
          name="price"
          value={formData.price}
          onChange={handleChange}
         
          required
        />
        <label>Price</label>
        </div>
        <div className="input-group">

        <textarea
          
          name="description"
          value={formData.description}
          onChange={handleChange}
          required
        />
        
        </div>
        <div className="input-group">

        <input
          type="file"
          name="poster"
          accept="image/*"
          onChange={handleFileInputChange}
          required
        />
        </div>
        <div className="input-group">

        <input
          type="number"
          
          name="seats"
          value={formData.seats}
          onChange={handleChange}
          required
        />
        <label>No of Seats</label>
        </div>
        <div className="Button1">
        <Button  type="submit" text="Register Event"/>
        </div>

     
      </form>
      {/* <Button  type="submit" text="Register Event"/> */}

    </div>
    </div>
    </>
    
  );
};

export default EventForm;



 