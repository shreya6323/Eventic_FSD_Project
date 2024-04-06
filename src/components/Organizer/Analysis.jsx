

// import React, { useState, useEffect } from 'react';
// import './Analysis.css';
// import Sidebar from './Sidebar';
// import Lottie from 'lottie-react-web';
// import happy from '../../assets/happy.json';
// import average from '../../assets/average.json';
// import sad from '../../assets/sad.json';
// import PieChart from './PieChart'; // Import the PieChart component

// const Analysis = () => {
//   const [feedbacks, setFeedbacks] = useState([]);
//   const [event, setEvent] = useState([]);

//   useEffect(() => {
//     const fetchEventData = async () => {
//       try {
//         const eventname = localStorage.getItem('eventName');
//         const eventResponse = await fetch(`/api/event/${eventname}`);
//         const feedbackResponse = await fetch(`/api/feedback/${eventname}`);

//         if (eventResponse.ok && feedbackResponse.ok) {
//           const eventData = await eventResponse.json();
//           const feedbackData = await feedbackResponse.json();
//           setEvent(eventData);
//           setFeedbacks(feedbackData);
//         } else {
//           console.error('Failed to fetch event details or feedbacks');
//         }
//       } catch (error) {
//         console.error('Error fetching event details or feedbacks:', error);
//       }
//     };

//     fetchEventData();
//   }, []);

//   const renderEmoji = (rating) => {
//     switch (rating) {
//       case 'Happy':
//         return <Lottie options={{ animationData: happy, loop: true, autoplay: true }} width={35} height={35} />;
//       case 'Neutral':
//         return <Lottie options={{ animationData: average, loop: true, autoplay: true }} width={40} height={40} />;
//       case 'Unhappy':
//         return <Lottie options={{ animationData: sad, loop: true, autoplay: true }} width={40} height={40} />;
//       default:
//         return null;
//     }
//   };

//   // Calculate the percentage of happy and sad feedbacks
//   const totalFeedbacks = feedbacks.length;
//   const neutralFeedbacks = feedbacks.filter((feedback) => feedback.rating === 'Neutral').length;
//   const happyFeedbacks = feedbacks.filter((feedback) => feedback.rating === 'Happy').length;
//   const sadFeedbacks = feedbacks.filter((feedback) => feedback.rating === 'Unhappy').length;
//   const happyPercentage = (happyFeedbacks / totalFeedbacks) * 100;
//   const sadPercentage = (sadFeedbacks / totalFeedbacks) * 100;
//  const neutralPercentage =  (neutralFeedbacks / totalFeedbacks) * 100;
//   return (
//     <>
//       <Sidebar />
//       <div className="dashboard-container">
//         <div className="left-section">
//           <div className="rectangle-container">
//             <div className="rectangle revenue">
//               <div className="icon"><i className="fas fa-dollar-sign"></i></div>
//               <div className='content'>
//                 <div className="label">Revenue</div>
//                 <div className="value">Rs. {event.price * event.sold_tickets}</div>
//               </div>
//             </div>
//             <div className="rectangle ticket-sold">
//               <div className="icon"><i className="fas fa-ticket-alt"></i></div>
//               <div className='content'>
//                 <div className="label">Tickets Sold</div>
//                 <div className="value">{event.sold_tickets}</div>
//               </div>
//             </div>
//           </div>
//           <div className="circle-container">
//           <div className="circle">
//             {/*
//               <div className="icon"><i className="fas fa-chart-line"></i></div>
//               <div className="label">Feedback Analysis</div>
//               <div className="value">75%</div> */}
//               {/* Render the PieChart component */}
//               <PieChart happyPercentage={happyPercentage} sadPercentage={sadPercentage} neutralPercentage={neutralPercentage} />
//             {/* </div> */}
//             </div>
//           </div>
//         </div>
//         <div className="right-section">
//           {feedbacks.map((feedback, index) => (
//             <div className="feedback-box" key={index}>
//               <div className="info-feed">
//                 <div className="feedback-title">{feedback.user.userName}</div>
//                 <div className="emoji">{renderEmoji(feedback.rating)}</div>
//               </div>
//               <p className="feedback-text">{feedback.description}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Analysis;
import React, { useState, useEffect } from 'react';
import './Analysis.css';
import Sidebar from './Sidebar';
import Lottie from 'lottie-react-web';
import happy from '../../assets/happy.json';
import average from '../../assets/average.json';
import sad from '../../assets/sad.json';
import PieChart from './PieChart'; // Import the PieChart component
import Loader from '../Loader'; // Import your Loader component

const Analysis = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [event, setEvent] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchEventData = async () => {
      try {
        const eventname = localStorage.getItem('eventName');
        const eventResponse = await fetch(`/api/event/${eventname}`);
        const feedbackResponse = await fetch(`/api/feedback/${eventname}`);

        if (eventResponse.ok && feedbackResponse.ok) {
          const eventData = await eventResponse.json();
          const feedbackData = await feedbackResponse.json();
          setEvent(eventData);
          setFeedbacks(feedbackData);
        } else {
          console.error('Failed to fetch event details or feedbacks');
        }
      } catch (error) {
        console.error('Error fetching event details or feedbacks:', error);
      } finally {
        setLoading(false); // Set loading to false after fetching data
      }
    };

    fetchEventData();
  }, []);

  const renderEmoji = (rating) => {
    switch (rating) {
      case 'Happy':
        return <Lottie options={{ animationData: happy, loop: true, autoplay: true }} width={35} height={35} />;
      case 'Neutral':
        return <Lottie options={{ animationData: average, loop: true, autoplay: true }} width={40} height={40} />;
      case 'Unhappy':
        return <Lottie options={{ animationData: sad, loop: true, autoplay: true }} width={40} height={40} />;
      default:
        return null;
    }
  };

  // Calculate the percentage of happy and sad feedbacks
  const totalFeedbacks = feedbacks.length;
  const neutralFeedbacks = feedbacks.filter((feedback) => feedback.rating === 'Neutral').length;
  const happyFeedbacks = feedbacks.filter((feedback) => feedback.rating === 'Happy').length;
  const sadFeedbacks = feedbacks.filter((feedback) => feedback.rating === 'Unhappy').length;
  const happyPercentage = (happyFeedbacks / totalFeedbacks) * 100;
  const sadPercentage = (sadFeedbacks / totalFeedbacks) * 100;
  const neutralPercentage =  (neutralFeedbacks / totalFeedbacks) * 100;

  return (
    <>
      <Sidebar />
      <div className="dashboard-container">
        {loading ? (
          <Loader /> // Render loader if loading
        ) : (
          <>
                     <div className="dashboard-container">
        <div className="left-section">
          <div className="rectangle-container">
            <div className="rectangle revenue">
              <div className="icon"><i className="fas fa-dollar-sign"></i></div>
              <div className='content'>
                <div className="label">Revenue</div>
                <div className="value">Rs. {event.price * event.sold_tickets}</div>
              </div>
            </div>
            <div className="rectangle ticket-sold">
              <div className="icon"><i className="fas fa-ticket-alt"></i></div>
              <div className='content'>
                <div className="label">Tickets Sold</div>
                <div className="value">{event.sold_tickets}</div>
              </div>
            </div>
          </div>
          <div className="circle-container">
          <div className="circle">
            {/*
              <div className="icon"><i className="fas fa-chart-line"></i></div>
              <div className="label">Feedback Analysis</div>
              <div className="value">75%</div> */}
              {/* Render the PieChart component */}
              <PieChart happyPercentage={happyPercentage} sadPercentage={sadPercentage} neutralPercentage={neutralPercentage} />
            {/* </div> */}
            </div>
          </div>
        </div>
        <div className="right-section">
          {feedbacks.map((feedback, index) => (
            <div className="feedback-box" key={index}>
              <div className="info-feed">
                <div className="feedback-title">{feedback.user.userName}</div>
                <div className="emoji">{renderEmoji(feedback.rating)}</div>
              </div>
              <p className="feedback-text">{feedback.description}</p>
            </div>
          ))}
        </div>
      </div>

          </>
        )}
      </div>
    </>
  );
};

export default Analysis;
