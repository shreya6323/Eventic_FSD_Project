// import './Dashboard.css';
import React from 'react';
import Sidebar from './Sidebar';
import './Dash.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import TicketFail from './TicketFail';
import EventDetails from '../EventDetails';
import { useParams } from 'react-router-dom';
const Dash = () => {
  const { eventname} = useParams();
  const {admin} = useParams();
  console.log(admin);

  return (<>
<Sidebar />
<div className='event-detail-container'>
<EventDetails eventName={eventname} admin={admin}/>
</div>
</>
  );
};

export default Dash;
