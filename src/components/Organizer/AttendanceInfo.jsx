// import React, { useState, useEffect } from 'react';
// import './AttendanceInfo.css'; // Importing CSS file for styling
// import Sidebar from './Sidebar';

// const AttendanceInfo = () => {
//   const [attendanceData, setAttendanceData] = useState([]);

//   useEffect(() => {
//     const eventname = localStorage.getItem('eventName');
//     console.log(eventname);
// //     // Fetch attendance data from the backend API
// //     fetch(`api/attendance/${eventname}`)
// //       .then(response => {
// //         if (!response.ok) {
// //           throw new Error('Failed to fetch attendance data');
// //         }
// //         return response.json();
// //       })
// //       .then(data => {
// //         setAttendanceData(data);
// //       })
// //       .catch(error => {
// //         console.error('Error fetching attendance data:', error);
// //       });
// //   }, []); // Empty dependency array to ensure useEffect runs only once on component mount

// fetch(`api/attendance/${eventname}`)
//   .then(response => {
//     console.log(eventname);
//     console.log('Response status:', response.status);
//    // console.log(response.json());
//     if (!response.ok) {
//       throw new Error('Failed to fetch attendance data');
//     }
//     return response.json();
//   })
//   .then(data => {
//     console.log('Response data:', data);
//     setAttendanceData(data);
//   })
//   .catch(error => {
//     console.error('Error fetching attendance data:', error);
//   });
//   }, []);

//   return (
//     <>
//    <Sidebar />
//     <div className="attendance-table-container">
//       <div className="attendance-title">Attendance</div>
//       <div className="attendance-card">
//         <table className="attendance-table">
//           <thead>
//             <tr>
//               <th>Index</th>
//               <th>Ticket ID</th>
//               <th>Name</th>
//               <th>Time</th>
             
//             </tr>
//           </thead>
//           <tbody>
//             {attendanceData.map((attendance, index) => (
//               <tr key={attendance.attendanceId}>
//                 <td>{index + 1}</td>
//                 <td>{attendance.ticket.id}</td>
//                 <td>{attendance.ticket.user.userName}</td>
//                 <td>{attendance.time}</td>
              
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//     </>
//   );
// };

// export default AttendanceInfo;
import React, { useState, useEffect } from 'react';
import './AttendanceInfo.css'; // Importing CSS file for styling
import Sidebar from './Sidebar';
import Loader from '../Loader'; // Import your Loader component

const AttendanceInfo = () => {
  const [attendanceData, setAttendanceData] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const eventname = localStorage.getItem('eventName');
    
    // Fetch attendance data from the backend API
    fetch(`api/attendance/${eventname}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch attendance data');
        }
        return response.json();
      })
      .then(data => {
        setAttendanceData(data);
      })
      .catch(error => {
        console.error('Error fetching attendance data:', error);
      })
      .finally(() => {
        setLoading(false); // Set loading to false after fetching data
      });
  }, []);

  return (
    <>
      <Sidebar />
      {loading && <Loader />}
      <div className="attendance-table-container">
        <div className="attendance-title">Attendance</div>
        <div className="attendance-card">
          {/* Render loader if loading */}
      
          <table className={`attendance-table ${loading ? 'hidden' : ''}`}>
            <thead>
              <tr>
                <th>Index</th>
                <th>Ticket ID</th>
                <th>Name</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {attendanceData.map((attendance, index) => (
                <tr key={attendance.attendanceId}>
                  <td>{index + 1}</td>
                  <td>{attendance.ticket.id}</td>
                  <td>{attendance.ticket.user.userName}</td>
                  <td>{attendance.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default AttendanceInfo;
