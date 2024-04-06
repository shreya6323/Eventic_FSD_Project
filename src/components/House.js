import React from 'react';
import '../App.css';
import Footer from './Footer';
import Service from './Service';
import SwiperClass from './SwiperClass';
import Navbar from './Navbar';
import Home from './Home';
import TeamSection from './TeamSection';
import Contact from './Contact';
import EventDetails from './EventDetails';



function House(){
    return(
     <>
     <Navbar />
     <Home />
     <SwiperClass />
     <Service />
     <TeamSection />
     <Contact />
  
 
     <Footer />
    </>

    );
}

export default House;