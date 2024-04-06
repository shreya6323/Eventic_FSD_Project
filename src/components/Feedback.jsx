// // FeedbackForm.js
// import React, { useState } from 'react';
// import './Feedback.css';
// import Lottie from 'lottie-react-web';
// import happy from '../assets/happy.json';
// import average from '../assets/average.json';
// import sad from '../assets/sad.json';
// const Feedback = () => {
//   const [selectedRating, setSelectedRating] = useState('Satisfied');
//   const [feedback, setFeedback] = useState('');
//   const [showFeedbackForm, setShowFeedbackForm] = useState(true);
//   const handleRatingClick = (rating) => {
//     setSelectedRating(rating);
//   };
//   const handleInputChange = (event) => {
//     setFeedback(event.target.value);
//   };



//   const handleSubmit = () => {
//     console.log('Feedback:', feedback);
//     // You can implement your submit logic here
//     console.log('Selected Rating:', selectedRating);
//   };

//   const handleCloseForm = () => {
//     setShowFeedbackForm(false);
//   };

//   return (
//   <>
//     {showFeedbackForm && (
//       <div className='overlay'>
      
//     <div className="panel-container">
//     <div className="close-btn" onClick={handleCloseForm}>
//             <span>&times;</span>
//     </div>
//       <div className='feed'>Feedback</div>
//        <div className="ratings-container">
//          <div className={`rating ${selectedRating === 'Happy' ? 'active' : ''}`} onClick={() => handleRatingClick('Happy')}>
          
//            <Lottie
//               options={{
//                 animationData: happy,
//                 loop: true,
//                 autoplay: true,
//               }}
//               width={90}
//               height={90}
//               style={{ border: selectedRating === 'Happy' ? '2px solid #4c52b9' : 'none',borderRadius: '8px', // Adjust border radius as needed
//               padding: '8px' }}
//             />
      
//          </div>

//          <div className={`rating ${selectedRating === 'Neutral' ? 'active' : ''}`} onClick={() => handleRatingClick('Neutral')}>
         
//            <Lottie
//               options={{
//                 animationData: average,
//                 loop: true,
//                 autoplay: true,
//               }}
//               width={100}
//               height={100}
//               style={{ border: selectedRating === 'Neutral' ? '2px solid #4c52b9' : 'none',  borderRadius: '8px', // Adjust border radius as needed
//               padding: '8px' }}
//             />

         
//          </div>

//          <div className={`rating ${selectedRating === 'Unhappy' ? 'active' : ''}`} onClick={() => handleRatingClick('Unhappy')}>
         
          
//          <Lottie
//               options={{
//                 animationData: sad,
//                 loop: true,
//                 autoplay: true,
//               }}
//               width={100}
//               height={100}
//               style={{ border: selectedRating === 'Unhappy' ? '2px solid #4c52b9' : 'none' ,borderRadius: '8px', // Adjust border radius as needed
//               padding: '8px'}}
//             />
         
      
//          </div>
     
//        </div>
//        <input
//         className="feedback-input"
//         type="text"
//         placeholder="Tell us more about it"
//         value={feedback}
//         onChange={handleInputChange}
//       /><div className='feedbtn'>
//       <button className="btn" onClick={handleSubmit}>Send Review</button>
//       </div>
//      </div>
//      </div>)}</>
//   );
// };

// export default Feedback;

import React, { useState } from 'react';
import './Feedback.css';
import Lottie from 'lottie-react-web';
import happy from '../assets/happy.json';
import average from '../assets/average.json';
import sad from '../assets/sad.json';

import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Feedback = ({ eventname })  => {
  const [selectedRating, setSelectedRating] = useState('Satisfied');
  const [feedback, setFeedback] = useState('');
  const [showFeedbackForm, setShowFeedbackForm] = useState(true);
  const error = (error_msg) => toast.error(error_msg);
  const success = (success_msg) => toast.success(success_msg);
  const handleRatingClick = (rating) => {
    setSelectedRating(rating);
  };

  const handleInputChange = (event) => {
    setFeedback(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      // Feedback data to send to the backend
      const feedbackData = {
        description: feedback,
        rating: selectedRating
      };
 const username = localStorage.getItem('token');

      // Send feedbackData to the backend API
      const response = await fetch(`/api/feedback/${username}/${eventname}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(feedbackData)
      });

      // Check if the request was successful
      if (response.ok) {
        console.log('Feedback submitted successfully !');
        success('Feedback submitted successfully');
        setShowFeedbackForm(false);
        // You can perform additional actions here, such as showing a success message
      } else {
        console.error('Failed to submit feedback');
        error('Failed to submit feedback !');
        // Handle the error condition, such as showing an error message to the user
      }
    } catch (error) {
      console.error('Error submitting feedback:', error);
      // Handle any unexpected errors that occur during the request
    }
  };

  const handleCloseForm = () => {
    setShowFeedbackForm(false);
  };

  return (
    <>
    <ToastContainer />
      {showFeedbackForm && (
        <div className='overlay'>
          <div className="panel-container">
            <div className="close-btn" onClick={handleCloseForm}>
              <span>&times;</span>
            </div>
            <div className='feed'>Feedback</div>
            <div className="ratings-container">
              <div className={`rating ${selectedRating === 'Happy' ? 'active' : ''}`} onClick={() => handleRatingClick('Happy')}>
                <Lottie
                  options={{
                    animationData: happy,
                    loop: true,
                    autoplay: true
                  }}
                  width={90}
                  height={90}
                  style={{
                    border: selectedRating === 'Happy' ? '2px solid #4c52b9' : 'none',
                    borderRadius: '8px',
                    padding: '8px'
                  }}
                />
              </div>
              <div className={`rating ${selectedRating === 'Neutral' ? 'active' : ''}`} onClick={() => handleRatingClick('Neutral')}>
                <Lottie
                  options={{
                    animationData: average,
                    loop: true,
                    autoplay: true
                  }}
                  width={100}
                  height={100}
                  style={{
                    border: selectedRating === 'Neutral' ? '2px solid #4c52b9' : 'none',
                    borderRadius: '8px',
                    padding: '8px'
                  }}
                />
              </div>
              <div className={`rating ${selectedRating === 'Unhappy' ? 'active' : ''}`} onClick={() => handleRatingClick('Unhappy')}>
                <Lottie
                  options={{
                    animationData: sad,
                    loop: true,
                    autoplay: true
                  }}
                  width={100}
                  height={100}
                  style={{
                    border: selectedRating === 'Unhappy' ? '2px solid #4c52b9' : 'none',
                    borderRadius: '8px',
                    padding: '8px'
                  }}
                />
              </div>
            </div>
            <input
              className="feedback-input"
              type="text"
              placeholder="Tell us more about it"
              value={feedback}
              onChange={handleInputChange}
            />
            <div className='feedbtn'>
              <button className="btn" onClick={handleSubmit}>Send Review</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Feedback;
