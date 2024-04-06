



import React, { useState, useRef } from 'react';
import './AdminHome.css';
import DeleteIcon from '@material-ui/icons/Delete';
import { ticketOutline } from 'ionicons/icons';
import { IonIcon } from '@ionic/react';
import slide_image_2 from '../../assets/img_2.jpeg';
import Sidebar from './Sidebar';
import { IoClose } from "react-icons/io5";
import { useEffect } from 'react';
import DeleteModal from './DeleteModal'; // Import the DeleteModal component
import VisibilityIcon from '@material-ui/icons/Visibility'; 
const Photo = () => {
  const [photos, setPhotos] = useState([]);

  const [model, setModel] = useState(false);
  const [tempimgSrc, setTempImgSrc] = useState('');
  const fileInputRef = useRef(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deleteModalMessage, setDeleteModalMessage] = useState('');

  useEffect(() => {
    // Function to fetch events data from your backend API
    const fetchPhotos = async () => {
      try {
        const eventname = localStorage.getItem('eventName');
        // Fetch events data from your backend API
        const response = await fetch(`/api/show_photos/${eventname}`); 
        if (response.ok) {
          const data = await response.json();
          // Update events state with the fetched events data
          setPhotos(data);
        } else {
          console.error('Photos not exist !');
        }
      } catch (error) {
        console.error('Error fetching events data:', error);
      }
    };  // Call the fetchEvents function when the component mounts
    fetchPhotos();
  }, [photos]);

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  const handleAddPhoto = () => {
    fileInputRef.current.click(); // Trigger file input click
  };

  const handleFileChange = (e) => 
  {
    const eventname = localStorage.getItem('eventName');
    const files = e.target.files;
    handleFiles(files);
  };

  const handleFiles = (files) => {
    const eventname = localStorage.getItem('eventName');
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append('image', files[i]);
    }
  
    fetch(`/api/photos/${eventname}`, {
      method: 'POST',
      body: formData,
    }).then(response => {
      if (response.ok) {
        // setPhotos(response.data);
        console.log('Photo added successfully!');
        // Assuming you have a function to fetch updated events from backend
        // You can update events state with the new photo here
      } else {
        console.error('Failed to add photo');
      }
    }).catch(error => {
      console.error('Error adding photo:', error);
    });
  };

  // Function to handle deletion
  const handleDeletePhoto = (photoid) => {
    fetch(`/api/photos/${photoid}`, {
      method: 'DELETE',
    }).then(response => {
      if (response.ok) {
        console.log('Photo deleted successfully!');
        setPhotos(prevPhotos => prevPhotos.filter(photo => photo.photoid !== photoid));
        setShowDeleteModal(false);
      } else {
        console.error('Failed to delete photo');
      }
    }).catch(error => {
      console.error('Error deleting photo:', error);
    });
  };

  // Drag and Drop Event Handlers
  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragEnter = (e) => {
    e.preventDefault();
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    handleFiles(files);
  };

  return (
    <>
    <div className='photo-container' onDragOver={handleDragOver} onDrop={handleDrop} onDragEnter={handleDragEnter} onDragLeave={handleDragLeave}>
      <div className={model ? 'model open' : 'model'}>
        <IoClose onClick={() => setModel(false)} />
        <img src={`data:image/png;base64,${tempimgSrc}`}  alt="enlarged" />
      </div>
      <div className="bar">
        {/* <span className="logo-container">
          <IonIcon icon={ticketOutline} size="large" className='eventic-logo' />
          <span className="logo">Eventic</span>
        </span> */}
        <p>Photographs</p>
      </div>
      <Sidebar />
      <div className="event-grid">
        
        <button onClick={handleAddPhoto} className="create-button">
          <h3>Drag and drop your images here or choose from the device</h3>
          <br ></br>
          <span className="plus-icon">&#43;</span>
       
        </button>
        
        {photos.map((item,index) => (
          <div key={index} className="event-item" >
          <img src={`data:image/png;base64,${item.pic}`} alt="event_image" />
            <div className="actions">
            <button onClick={() => getImg(item.pic)}>
                <VisibilityIcon />
              </button>
              <button onClick={() => {
                handleDeletePhoto(item.id);
              }} 
              >
                <DeleteIcon />
              </button>
              
            </div>
          </div>
        ))}
      </div>
      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      {/* {showDeleteModal && (
        <DeleteModal 
          message={deleteModalMessage} 
          onClose={() => setShowDeleteModal(false)} 
          onDelete={handleDeletePhoto} 
        />
      )} */}
      </div>
    </>
  );
};

export default Photo;

