import React from "react";
import './Video.css';
import videoFile from '../assets/Home.mp4';

function Video(){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };
    const handleClick = () => {
        // This function will be called when the button is clicked
        console.log('Button clicked!');
        // You can add any logic or actions you want to perform here
      };
      return (
      
         <div className="blob-container">
      <video autoPlay loop muted playsInline className="video-in-blob">
        <source src={videoFile} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </div>
      );
        
  
}

export default Video;




  

