import React from 'react';
import Typical from 'react-typical';
import './TypeWrite.css'
function Typewriter() {
  return (
  
 
    <p className='typebox'>
      <Typical
        steps={[
            'Join ➡️ ', 3000,
            'Connect 🔗 ', 4000,
            'Explore 🔍 ', 5000,
            'Unite 🤝 ', 4000,
            'Engage 💬 ', 5000,
            'Celebrate 🎉 ', 7000,
           
            'Elevate 🚀 ', 6000,
            'Discover 🔍 ', 6000,
            'Dive 🌊 ', 3000
          ]}
        loop={Infinity}
        wrapper="b"
        className="typewriter-text"
      />
     
 
    </p>
    
  );
}

export default Typewriter;
