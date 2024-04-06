import React from 'react';
import './TeamSection.css';
import shreya from '../assets/shreya.jpg';
import dipali from '../assets/dipali.jpg';
const TeamSection = () => {
  return (
    <div className="main">
        <p className="heading">Our Team :</p>
      <div className="profile-card">
        <div className="img">
        <a href="https://www.linkedin.com/in/shreya-gandhi-b3a046254/" target="_blank" rel="noopener noreferrer">
  <img src={dipali} alt="Team Member" />
</a>

        </div>
        <div className="caption">
          <div className='names'>Dipali Detroja</div>
          <p>Full Stack Developer</p>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
      <div className="profile-card">
        <div className="img">
        <a href="https://www.linkedin.com/in/shreya-gandhi-b3a046254/" target="_blank" rel="noopener noreferrer">
  <img src={shreya} alt="Team Member" />
</a>
        </div>
        <div className="caption">
          <div className='names'>Shreya Gandhi</div>
          <p> Full Stack Developer</p>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
      {/* <div className="profile-card">
        <div className="img">
          <img src="https://1.bp.blogspot.com/-AO5j2Y9lzME/YLjr3mxiqAI/AAAAAAAACPE/KAaYYTtQTrgBE3diTbxGoc4U4fCGx-C2gCNcBGAsYHQ/s16000/team-1-4.jpg" alt="Team Member" />
        </div>
        <div className="caption">
          <h3>Tom Cruise</h3>
          <p>Full Stack Developer</p>
          <div className="social-links">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default TeamSection;