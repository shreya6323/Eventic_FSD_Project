// // import React from 'react';
// // import { Swiper } from 'swiper/react';
// // import 'swiper/swiper-bundle.css'; // Import the bundle, adjust the path according to your setup
// // import { SwiperSlide } from 'swiper/react'; // Import SwiperSlide from 'swiper/react'
// // import './SwiperClass.css';
// // import { Link } from 'react-router-dom';
// // import slide_image_1 from '../assets/img.jpeg';
// // import slide_image_2 from '../assets/img_2.jpeg';
// // import slide_image_3 from '../assets/img_3.jpeg';
// // import slide_image_4 from '../assets/img_4.jpeg';
// // import slide_image_5 from '../assets/img_5.jpeg';
// // import slide_image_6 from '../assets/img6.jpeg';
// // import { IonIcon } from '@ionic/react';
// // import { ticketOutline } from 'ionicons/icons';


// // // Install Swiper modules
// // import {EffectCoverflow,Pagination,Navigation} from 'swiper/modules';

// // function SwiperClass() {
// //   return (
  
// //    <>
  
                   
// //   <p className="heading">Upcoming Events...</p>
// //      <Swiper
    
// //      effect={'coverflow'}
// //      grabCursor={true}
// //      centeredSlides={true}
     
// //      loop={true}
// //      spaceBetween={-950}
// //      slidesPerview={5}
// //      coverflowEffect={{
// //         rotate:0,
// //         stretch:0,
// //         depth:400,
// //         modifier:4.5,
// //      }}
    
// //      pagination={{el:'.swiper-pagination',clickable:true}}
// //      navigation={
// //         {
// //             nextEl:'swiper-button-next',
// //             prevEl:'swiper-button-prev',
// //             clickable:true,
// //         }
// //      }
// //      modules={[EffectCoverflow,Pagination,Navigation]}

// //      className='swiper_container' 
// //       >

// //      <SwiperSlide>
// //      <Link to="/event-details">
// //      <img src={slide_image_1} alt="slide_image"/>
// //       </Link>
     
// //      </SwiperSlide>

// //      <SwiperSlide>
// //       <img src={slide_image_2} alt="slide_image"/>
// //      </SwiperSlide>

// //      <SwiperSlide>
// //       <img src={slide_image_3} alt="slide_image"/>
// //      </SwiperSlide>

// //      <SwiperSlide>
// //       <img src={slide_image_4} alt="slide_image"/>
// //      </SwiperSlide>

// //      <SwiperSlide>
// //       <img src={slide_image_5} alt="slide_image"/>
// //      </SwiperSlide>

// //      <SwiperSlide>
// //       <img src={slide_image_6} alt="slide_image"/>
// //      </SwiperSlide>
// //      <div className='slider-controler'>
// //         </div>
// //      </Swiper>
// //       </>
// //   );
// // }

// // export default SwiperClass;
// import React, { useState, useEffect } from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.css';
// import './SwiperClass.css';
// import { Link } from 'react-router-dom';
// import { IonIcon } from '@ionic/react';
// import { ticketOutline } from 'ionicons/icons';
// import {EffectCoverflow,Pagination,Navigation} from 'swiper/modules';



// function SwiperClass() {
//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     // Fetch event data from your backend API
//     const fetchEvents = async () => {
//       try {
//         const response = await fetch('/api/events'); // Adjust the endpoint according to your backend API
//         if (response.ok) {
//           const eventData = await response.json();
//           setEvents(eventData);
//         } else {
//           console.error('Failed to fetch event data');
//         }
//       } catch (error) {
//         console.error('Error fetching event data:', error);
//       }
//     };

//     fetchEvents();
//   }, []);

//   return (
//     <>
//       <p className="heading">Upcoming Events...</p>
//       <Swiper
//         effect={'coverflow'}
//         grabCursor={true}
//         centeredSlides={true}
//         loop={true}
//         spaceBetween={-950}
//         slidesPerView={5} // Corrected prop name
//         coverflowEffect={{
//           rotate: 0,
//           stretch: 0,
//           depth: 400,
//           modifier: 4.5,
//         }}
//         pagination={{ el: '.swiper-pagination', clickable: true }}
//         navigation={{
//           nextEl: 'swiper-button-next',
//           prevEl: 'swiper-button-prev',
//           clickable: true,
//         }}
//         modules={[EffectCoverflow, Pagination, Navigation]}
//         className="swiper_container"
//       >
//         {events.map((event) => (
//           <SwiperSlide key={event.eventid}>
//             <Link to={`/event-details/${event.eventname}`}>
//               <img src={`data:image/png;base64,${event.poster}`}  alt="Event Poster" />
//             </Link>
//           </SwiperSlide>
//         ))}
//       </Swiper>
//     </>
//   );
// }

// export default SwiperClass;







import { IonIcon } from '@ionic/react';
import { searchOutline } from 'ionicons/icons';



import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './SwiperClass.css';
import { Link } from 'react-router-dom';
//import { IonIcon } from '@ionic/react';
//import { ticketOutline } from 'ionicons/icons';
import { EffectCoverflow, Pagination, Navigation } from 'swiper';

function SwiperClass() {
  const [events, setEvents] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Fetch event data from your backend API
    const fetchEvents = async () => {
      try {
        const response = await fetch('/api/events'); // Adjust the endpoint according to your backend API
        if (response.ok) {
          const eventData = await response.json();
          setEvents(eventData);
        } else {
          console.error('Failed to fetch event data');
        }
      } catch (error) {
        console.error('Error fetching event data:', error);
      }
    };

    fetchEvents();
  }, []);

  // Filter events based on the search query
  const filteredEvents = events.filter(event =>
    // event.eventname.toLowerCase().includes(searchQuery.toLowerCase())
    event.eventname.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
    event.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <><div className="heading">Upcoming Events...</div>
      <div className="search-container">
        {/* <input
          type="text"
          placeholder="Search events by name"
          className="search-input"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        /> */}
  
<input
  type="text"
  placeholder="Search events by name, location and category ..."
  className="search-input"
  value={searchQuery}
  onChange={(e) => setSearchQuery(e.target.value)}
/>

         {/* <span className="search-icon">
              <IonIcon icon={searchOutline} />
              </span> */}
        {/* Optionally, add a search button */}
        {/* <button className="search-button">Search</button> */}
      </div>
    
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        spaceBetween={-950}
        slidesPerView={5} // Corrected prop name
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 400,
          modifier: 4.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: 'swiper-button-next',
          prevEl: 'swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        {filteredEvents.map((event) => (
          <SwiperSlide key={event.eventid}>
            <Link to={`/event-details/${event.eventname}`}>
              <img src={`data:image/png;base64,${event.poster}`} alt="Event Poster" />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default SwiperClass;
