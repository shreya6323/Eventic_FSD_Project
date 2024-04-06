// import React, { useState ,useEffect} from 'react';
// import './AdminHome.css';

// import { Link } from 'react-router-dom';
// import DeleteIcon from '@material-ui/icons/Delete';
// import UpdateIcon from '@material-ui/icons/Update';
// import { ticketOutline } from 'ionicons/icons';
// import { IonIcon } from '@ionic/react';
// import Button from '../Button';
// import slide_image_2 from '../../assets/img_2.jpeg';
// const AdminHome = () => {
//   const [events, setEvents] = useState([]);
//  const token = localStorage.getItem('token');
//   useEffect(() => {
//     // Function to fetch events data from your backend API
//     const fetchEvents = async () => {
//       try {
//         const adminName = localStorage.getItem('token');
//         // Fetch events data from your backend API
//         const response = await fetch(`/api/events/${adminName}`); 
//         if (response.ok) {
//           const data = await response.json();
//           // Update events state with the fetched events data
//           setEvents(data);
//         } else {
//           console.error('Failed to fetch events data');
//         }
//       } catch (error) {
//         console.error('Error fetching events data:', error);
//       }
//     };  // Call the fetchEvents function when the component mounts
//     fetchEvents();
//   }, []);

//   const handleUpdateEvent = eventname => {
    
//     // Redirect to the event update page with the event name as a URL parameter
//     window.location.href = `/update-event/${eventname}`;

//   };

//   const handleLogout = () => {
//     // Clear user token or authentication state (replace this with your actual logout logic)
//     // For example, you can remove the token from localStorage
//     localStorage.setItem('token','');
//     window.location.href='/general-home';
//     // Redirect to the login page or perform any other necessary actions after logout
//  // Redirect to the login page
//   }; 

//   const handleLogin = () => {
//     // Clear user token or authentication state (replace this with your actual logout logic)
//     // For example, you can remove the token from localStorage

//     window.location.href='/organizer-login';
//     // Redirect to the login page or perform any other necessary actions after logout
//  // Redirect to the login page
//   }; 

//   const handleDeleteEvent = async eventname => {
//     console.log(eventname);
//     try {
//       const response = await fetch(`/api/events/delete/${eventname}`, {
//         method: 'DELETE'
//       });
  
//       if (response.ok) {
//         // If the deletion is successful, update the events state by filtering out the deleted event
//         setEvents(events.filter(event => event.eventname !== eventname));
//         console.log(`Event with ID ${eventname} deleted successfully`);
//       } else {
//         console.error(`Failed to delete event with eventname: ${eventname}`);
//       }
//     } catch (error) {
//       console.error('Error deleting event:', error);
//     }
//   };
  
//   const handleEventClick = eventname => {
//     localStorage.setItem('eventName', eventname);
//     window.location.href = `/admin/${eventname}/eventic`; // Adjust the path based on your application routes
// };

 

//   return (
//     <>
     
//     <div className ="bar">
//     <span className="logo-container">
//                  <IonIcon icon={ticketOutline} size="large" className='eventic-logo' />
//                  <span className="logo">Eventic</span>
//                  </span><div className='head'>Welcome {token} !</div>
//                  {token && (  <Button text="Logout" onClick={handleLogout}></Button>)}    
//            {!token && (  <Button text="Login" onClick={handleLogin}></Button>)}</div>
          
//     <div>
    
//       <div className="event-grid">

//       <Link to="/event-form" className="create-button">
//   <button >
//     <span>&#43;</span>
//   </button>
// </Link>

//         {/* {events.map(event => (
//           <div key={event.eventid} className="event-item">
//    <img src={`data:image/png;base64,${event.poster}`} alt="image" />

//             <div className='event-name'>{event.eventname}</div>
//             <div className="actions">
//               <button onClick={() => handleDeleteEvent(event.eventid)}><DeleteIcon /></button>
//               <button><UpdateIcon/></button>
//             </div>
//           </div>
          
//      ))} */}






// {events.map(event => (
//   <div key={event.eventname} className="event-item">
//     <img src={`data:image/png;base64,${event.poster}`} alt="image" onClick={() => handleEventClick(event.eventname)} />
//     <div className='event-name'>{event.eventname}</div>
//     <div className="actions">
//       <button onClick={() => handleDeleteEvent(event.eventname)}><DeleteIcon /></button>
//       <button  onClick={() => handleUpdateEvent(event.eventname)}><UpdateIcon/></button>
//     </div>
//   </div>
// ))}


//    </div>
//    </div>
//     </>
//   );
// };

// export default AdminHome;



import React, { useState, useEffect } from 'react';
import './AdminHome.css';
import { Link } from 'react-router-dom';
import DeleteIcon from '@material-ui/icons/Delete';
import UpdateIcon from '@material-ui/icons/Update';
import { ticketOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import Button from '../Button';
import Loader from '../Loader'; // Import Loader component
import slide_image_2 from '../../assets/img_2.jpeg';

const AdminHome = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true); // State to track loading status

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const adminName = localStorage.getItem('token');
        const response = await fetch(`/api/events/${adminName}`);
        if (response.ok) {
          const data = await response.json();
          setEvents(data);
          setLoading(false); // Set loading to false when data is fetched
        } else {
          console.error('Failed to fetch events data');
        }
      } catch (error) {
        console.error('Error fetching events data:', error);
      }
    };
    fetchEvents();
  }, []);

  const handleUpdateEvent = eventname => {
    window.location.href = `/update-event/${eventname}`;
  };

  const handleLogout = () => {
    localStorage.setItem('token', '');
    window.location.href = '/general-home';
  };

  const handleLogin = () => {
    window.location.href = '/organizer-login';
  };

  const handleDeleteEvent = async eventname => {
    try {
      const response = await fetch(`/api/events/delete/${eventname}`, {
        method: 'DELETE'
      });
  
      if (response.ok) {
        setEvents(events.filter(event => event.eventname !== eventname));
        console.log(`Event with ID ${eventname} deleted successfully`);
      } else {
        console.error(`Failed to delete event with eventname: ${eventname}`);
      }
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };
  
  const handleEventClick = eventname => {
    localStorage.setItem('eventName', eventname);
    window.location.href = `/admin/${eventname}/eventic`;
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className="bar">
            <span className="logo-container">
              <IonIcon icon={ticketOutline} size="large" className='eventic-logo' />
              <span className="logo">Eventic</span>
            </span>
            <div className='head'>Welcome {localStorage.getItem('token')} !</div>
            {localStorage.getItem('token') && (<Button text="Logout" onClick={handleLogout}></Button>)}
            {!localStorage.getItem('token') && (<Button text="Login" onClick={handleLogin}></Button>)}
          </div>
          <div>
            <div className="event-grid">

                    <Link to="/event-form" className="create-button">
                          <button >
                      <span>&#43;</span>
                    </button>
                       </Link> 

              {events.map(event => (
                <div key={event.eventname} className="event-item">
                  <img src={`data:image/png;base64,${event.poster}`} alt="image" onClick={() => handleEventClick(event.eventname)} />
                  <div className='event-name'>{event.eventname}</div>
                  <div className="actions">
                    <button onClick={() => handleDeleteEvent(event.eventname)}><DeleteIcon /></button>
                    <button onClick={() => handleUpdateEvent(event.eventname)}><UpdateIcon/></button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AdminHome;
