import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faChartLine, faTicketAlt, faUserCheck, faCamera } from '@fortawesome/free-solid-svg-icons';
 import './Sidebar.css'; // Import your CSS file
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Dash from './Dashboard';
import QRScanner from './QRScanner';
const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);


  const toggleSidebar = () => {
    setExpanded(!expanded);
  };

  return (<>


    <div className={`sidebar ${expanded ? 'expanded' : 'collapsed'}`}>
      <div className="toggle-btn" onClick={toggleSidebar}>
        {expanded ? <>&#x2190;</> : <>&#x2192;</>}
      </div>
      <div className="sidebar-items">
        {expanded ? (
          <>
            {/* <Link to="/xtss" className="sidebar-item">
              <FontAwesomeIcon icon={faCalendarAlt} className="large-icon" />
              <span>Events</span>
            </Link> */}
             <Link to="/admin-home" className="sidebar-item">
                <FontAwesomeIcon icon={faHome} className="large-icon" />
                <span>Home</span>
              </Link>
            <Link to="/analysis" className="sidebar-item">
              <FontAwesomeIcon icon={faChartLine} className="large-icon" />
              <span>Analysis</span>
            </Link>
            <Link to="/scan-ticket" className="sidebar-item">
              <FontAwesomeIcon icon={faTicketAlt} className="large-icon" />
              <span>Scan Ticket</span>
            </Link>
            <Link to="/attendance" className="sidebar-item">
              <FontAwesomeIcon icon={faUserCheck} className="large-icon" />
              <span>Attendance</span>
            </Link>
            <Link to="/photo-uploading" className="sidebar-item" >
              <FontAwesomeIcon icon={faCamera} className="large-icon" />
              <span>Photos</span>
            </Link>
          </>
        ) : (
          <>
            {/* <Link to="/events" className="sidebar-item">
              <FontAwesomeIcon icon={faCalendarAlt} className="large-icon" />
            </Link> */}
               <Link to="/admin-home" className="sidebar-item">
                <FontAwesomeIcon icon={faHome} className="large-icon" />
               
              </Link>
            <Link to="/analysis" className="sidebar-item">
              <FontAwesomeIcon icon={faChartLine} className="large-icon" />
            </Link>
            <Link to="/scan-ticket" className="sidebar-item">
              <FontAwesomeIcon icon={faTicketAlt} className="large-icon" />
            </Link>
            <Link to="/attendance" className="sidebar-item">
              <FontAwesomeIcon icon={faUserCheck} className="large-icon" />
            </Link>
            <Link to="/photo-uploading" className="sidebar-item">
              <FontAwesomeIcon icon={faCamera} className="large-icon" />
            </Link>
          </>
        )}
      </div>
    </div>
  
    </>);
};

export default Sidebar;
