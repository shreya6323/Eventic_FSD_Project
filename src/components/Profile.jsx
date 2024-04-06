// // Profile.js
// import React from 'react';
// import './Profile.css';
// import Button from './Button';
// import { Link } from 'react-router-dom';



// const Profile = ({logout}) => {
 


//   return (
//     <div className="profile_container">
//       <div className="profile_header"></div>
//       <img
//         className="profile_avatar"
//         src="https://bootdey.com/img/Content/avatar/avatar6.png"
//         alt="avatar"
//       />
//       <div className="profile_body">
//         <div className="profile_bodyContent">
//           <h1 className="profile_name">John Doe</h1>
       
//           <div className="profile_buttonContainer">
//             {/* <Button text="EventHist"/> */}
//             <Link to="/eventhist">
//               <Button text="EventHist" />
//             </Link>
//             <Button text="PaymentHist"/>
//             <Button text="Logout" onClick={logout}/>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Profile;

import React, { useState, useEffect } from 'react';
import './Profile.css';
import Button from './Button';
import { Link } from 'react-router-dom';

const Profile = ({ logout }) => {
  const [user, setUser] = useState(null);


  

  useEffect(() => {
    // Fetch user details from API
    const fetchUserData = async () => {
      try {
        const username = localStorage.getItem('token');
        const response = await fetch(`/api/user/${username}`); // Adjust the API endpoint as needed
        if (response.ok) {
          const userData = await response.json();
          setUser(userData);
        } else {
          console.error('Failed to fetch user data');
        }
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUserData();
  }, []);

  return (
    <div className="profile_container">
      <div className="profile_header"></div>
      {user && (
        <>
          <img
            className="profile_avatar"
         
             src={`data:image/png;base64,${user.profilePic}`}
            alt="avatar"
          />
          <div className="profile_body">
            <div className="profile_bodyContent">
              <h1 className="profile_name">{user.userName}</h1>
              <div className="profile_buttonContainer">
                <Link to="/eventhist">
                  <Button text="EventHist" />
                </Link>
            
                <Button text="Logout" onClick={logout} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
