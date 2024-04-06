import React from 'react';
import './Service.css';
import { IonIcon } from '@ionic/react';
import { searchOutline } from 'ionicons/icons';
import slide_image_1 from '../assets/img.jpeg';
import slide_image_2 from '../assets/img_2.jpeg';
import slide_image_3 from '../assets/img_3.jpeg';
import slide_image_4 from '../assets/img_4.jpeg';
import slide_image_5 from '../assets/img_5.jpeg';
import slide_image_6 from '../assets/img6.jpeg';

const Service = () => {
  return (
    <div className='service'>
      <p className="title">What We Offer :</p>
      <div className='service_box'>

        <div className='service_box_item' >
          {/* <img src={slide_image_1} alt='img1' /> */}
          <p className='service-icon' style={{ fontSize: '4rem' }}>🔍</p>
          <p className='service_box_item_step'>
            <span> Step 1</span>
          </p>
          <h3>Discover & Filter</h3>
          <p>Explore events based on venue, interests, and more.</p>
        </div>

        <div className='service_box_item' >
        
          <p className='service_box_item_step'>
          <p className='service-icon' style={{ fontSize: '5rem' }}>💳</p>
            <span> Step 2</span>
          </p>
          <h3>Book Your Spot </h3>
          <p>Secure your spot with hassle-free digital payments.</p>
        </div>

        <div className='service_box_item'>
       
          <p className='service_box_item_step'>
          <p className='service-icon' style={{ fontSize: '5rem' }}>🎫</p>
            <span> Step 3</span>
          </p>
          <h3>Scan & Enter</h3>
          <p>Gain instant entry to events without waiting in line by scanning your ticket.</p>
        </div>

      </div>
    </div>
  );
};

export default Service;
