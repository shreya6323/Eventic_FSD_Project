import React from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import House from './components/House';
import Gallery from './components/Gallery';
import Service from './components/Service';
import Footer from './components/Footer';
import UpcomingEvents from './components/SwiperClass';
import PassengerDetails from './components/PassengerDetails';
import EventDetails from './components/EventDetails';
import AdminLogin from './components/Organizer/AdminLogin';
import TeamSection from './components/TeamSection';
import Contact from './components/Contact';
import { Dashboard } from '@mui/icons-material';
import Dash from './components/Organizer/Dashboard';
import QRScanner from './components/Organizer/QRScanner';
import AdminHome from './components/Organizer/AdminHome';
import  Photo from './components/Organizer/Photo';
import Login from './components/Login';
import Register from './components/Register';
import EventForm from './components/Organizer/EventForm'
import AdminRegister from './components/Organizer/AdminRegister';
import UpdateEventForm from './components/Organizer/UpdateEventForm';
import Ticket from './components/Ticket';
import Profile from './components/Profile';
import SuccessfulBooking from './components/SuccessfulBooking';
import TicketFail from './components/Organizer/TicketFail';
import TicketSuccess from './components/Organizer/TicketSuccess';
import AttendanceInfo from './components/Organizer/AttendanceInfo';
import Analysis from './components/Organizer/Analysis';
import EventHist from './components/EventHist';
import Feedback from './components/Feedback';
function App() {
  return (
    <>
    {/* // <TicketFail />
    // <TicketSuccess />
    // <SuccessfulBooking /> */}
  
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<House />} />
          <Route path="/general-home" element={<House />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/UpcomingEvents" element={<UpcomingEvents />}/>
          <Route path="/service" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/passenger-details" element={<PassengerDetails />} />
          <Route path="/event-details" element={<EventDetails />} />
          <Route path="/attendee-login" element={<Login />} />
          <Route path="/team" element={<TeamSection />} />
          <Route path="/attendee-register" element={<Register />} />
          {/* <Route path="/" element={<Dash />} /> */}
          <Route path="/organizer-login" element={<AdminLogin />} />
          <Route path='/organizer-register' element={<AdminRegister />} />
          <Route path="/admin-home" element={<AdminHome />} />
          <Route path="/event-form" element={<EventForm />} />
          <Route path="/update-event/:eventname" element={<UpdateEventForm />} />
          <Route path="/event-details/:eventname" element={<EventDetails />} />
          {/* <Route path="/event-details/:eventname" element={<EventDetails />} />   */}
          <Route path="/admin/:eventname/:admin" element={<Dash />} />
          <Route path="/ticket" element={<SuccessfulBooking />} />
        {/* <Route path="/analysis" element={<Dash />} /> */}
        <Route path="/scan-ticket" element={<QRScanner />} />
        {/* <Route path="/attendance" element={<Dash />} /> */}
        <Route path="/photo-uploading" element={<Photo />}></Route>
        <Route path="/TicketFail" element={<TicketFail />}></Route>
        <Route path="/analysis" element={<Analysis />}></Route>
        <Route path="/TicketSuccess" element={<TicketSuccess />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path="/attendance" element={<AttendanceInfo />}></Route>
        <Route path="/eventhist" element={<EventHist />}></Route>
        <Route path="/feedback" element={<Feedback />}></Route>



        </Routes>
      </div>
    </Router>
  
  
  {/* <Router>
    <div>
      <Routes>
       
        <Route path="/hi" element={<Dash />} />
        <Route path="/events" element={<AdminHome />} />
        <Route path="/analysis" element={<Dash />} />
        <Route path="/scan-ticket" element={<QRScanner />} />
        <Route path="/attendance" element={<Dash />} />
        <Route path="/photo-uploading" element={<Photo />} />
      
      </Routes>
      
    </div>
  </Router> */}

  </>
  
  );
}

export default App;
