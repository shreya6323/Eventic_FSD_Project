// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import Button from '../Button';

// const UpdateEventForm = () => {
//   const { eventname } = useParams();

//   const [formData, setFormData] = useState({
//     eventname: '',
//     location: '',
//     category: '',
//     eventDate: '',
//     eventTime: '',
//     price: '',
//     description: '',
//     poster: '',
//     seats: ''
//   });

//   useEffect(() => {
//     const fetchEventData = async () => {
//       try {
//         const response = await fetch(`/api/events/update/${eventname}`);
//         if (response.ok) {
//           const eventData = await response.json();
//           setFormData(eventData);
//         } else {
//           console.error('Failed to fetch event data');
//         }
//       } catch (error) {
//         console.error('Error fetching event data:', error);
//       }
//     };

//     fetchEventData();
//   }, [eventname]);


//   const formatDate = (date) => {
//     const day = String(date.getDate()).padStart(2, '0');
//     const month = String(date.getMonth() + 1).padStart(2, '0');
//     const year = date.getFullYear();
//     console.log(day,month,year);
//     return `${year}-${month}-${day}`;
//   };
//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(`/api/admin/update-event/${eventname}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         alert('Event updated successfully!');
//         // Redirect to AdminHome or any other page after successful update
//       } else {
//         alert('Failed to update event. Please try again.');
//       }
//     } catch (error) {
//       console.error('Error updating event:', error);
//       alert('An error occurred. Please try again later.');
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [name]: value
//     });
//   };

//   const handleFileInputChange = (event) => {
//     const file = event.target.files[0];
//     const reader = new FileReader();
//     reader.onloadend = () => {
//       const base64String = reader.result.split(',')[1]; // Extracting base64 data
//       setFormData({
//         ...formData,
//         poster: base64String // Set base64String to the poster field in formData
//       });
//     };
//     reader.readAsDataURL(file);
//   };

//   return (
//     <div className="container">
//       <div className="form-wrapper sign-up">
//       <form className="form" onSubmit={handleSubmit}>
//         <h2>Event Registration</h2>
//         <div className="input-group">
//         <input
//           type="text"
          
//           name="eventname"
//           value={formData.eventname}
//           onChange={handleChange}
//           required
//         />
//         <label>EventName</label>
//         </div>
//         <div className="input-group">

//         <input
//           type="text"
          
//           name="location"
//           value={formData.location}
//           onChange={handleChange}
//           required
//         />
//         <label>Location</label>
//         </div>
//         <div className="input-group">

//         <input
//           type="text"
          
//           name="category"
//           value={formData.category}
//           onChange={handleChange}
//           required
//         />
//         <label>Category</label>
//         </div>
//         <div className="input-group">
//         <label>Date</label>

//         <input
//           type="date"
          
//           name="eventDate"
//           value={formatDate(new Date(formData.eventDate))}
//           onChange={handleChange}
//           required
//         />
//         </div>
//         <div className="input-group">

//         <input
//           type="time"
          
//           name="eventTime"
//           value={formData.eventTime}
//           onChange={handleChange}
//           required
//           disabled
//         />
//         <label>Time</label>
//         </div>
//         <div className="input-group">

//         <input
//           type="text"
          
//           name="price"
//           value={formData.price}
//           onChange={handleChange}
//           disabled
//           required
//         />
//         <label>Price</label>
//         </div>
//         <div className="input-group">

//         <textarea
          
//           name="description"
//           value={formData.description}
//           onChange={handleChange}
//           required
//         />
        
//         </div>
//         <div className="input-group">

//         <input
//           type="file"
//           name="poster"
//           accept="image/*"
//           value={formData.poster}
//           onChange={handleFileInputChange}
//           required
//         />
//         </div>
//         <div className="input-group">

//         <input
//           type="number"
          
//           name="seats"
//           value={formData.seats}
//           onChange={handleChange}
//           required
//         />
//         <label>No of Seats</label>
//         </div>
//         <Button type="submit" text="Update Event"/>
//       </form>
//     </div>
//     </div>
    
//   );
// };

// export default UpdateEventForm;





import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Button from '../Button';

const UpdateEventForm = () => {
  const { eventname } = useParams();

  const [formData, setFormData] = useState({
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

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const response = await fetch(`/api/events/update/${eventname}`);
        if (response.ok) {
          const eventData = await response.json();
          setFormData(eventData);
        } else {
          console.error('Failed to fetch event data');
        }
      } catch (error) {
        console.error('Error fetching event data:', error);
      }
    };

    fetchEventData();
  }, [eventname]);

  const formatDate = (date) => {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/admin/update-event/${eventname}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Event updated successfully!');
        // Redirect to AdminHome or any other page after successful update
      } else {
        alert('Failed to update event. Please try again.');
      }
    } catch (error) {
      console.error('Error updating event:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
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

  return (
    <div className="container">
      <div className="form-wrapper sign-up">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Event Updation</h2>
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
        {/* Other input fields */}
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
        {/* <label>Date</label> */}

        <input
          type="date"
          
          name="eventDate"
          value={formatDate(new Date(formData.eventDate))}
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
        {/* <label>Time</label> */}

        </div>

        <div className="input-group">
        {/* <label>Price</label> */}
        <input
          type="text"
          
          name="price"
          
          
          value={`Price: ${formData.price}`}
          onChange={handleChange}
          disabled
          required
        />
        
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
          
          />
        </div>
        {formData.poster && (
            <div className="input-group">
              <img src={`data:image/png;base64,${formData.poster}`} alt="Selected Image" style={{ maxWidth: '100%', maxHeight: '200px' }} />
            </div>
          )}
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
        <Button type="submit" text="Update Event"/>
        </div>
      </form>
    </div>
    </div>
  );
};

export default UpdateEventForm;

