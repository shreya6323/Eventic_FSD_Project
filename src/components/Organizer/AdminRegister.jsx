import React, { useState } from 'react';
// import './../Auth.css';
import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import Button from '../Button';
const error = (error_msg) => toast.error(error_msg);
  const success = (success_msg) => toast.success(success_msg);



function AdminRegister({ handleSignUpClick }) {
  const [profilePic, setProfilePic] = useState(null);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
 
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      setProfilePic(reader.result);
    };
    reader.readAsDataURL(file);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        console.log(profilePic,userName,email,phoneNo,password);
      const response = await fetch('api/admin/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({   profilePic: profilePic.split(',')[1],userName, email,phoneNo , password}),
      });
      if(response.ok)
      {

        const token = response.headers.get('Authorization').split(' ')[1]; // Extract token from header
        console.log(token);
        localStorage.setItem('token', token); // Store token in local storage
        success('Successfully Registered !');//why it is not showing the pop up!!?????????
        window.location.href = '/admin-home';
   
      }
      else if(response.status === 409)
      {
          error ('Username already exists, Try another one !');
      }
      else if(response.status === 400)
      {
            error('Email already exists !');
      }
      else{
        error("An error occurred. Please try again later.");
      }
    }
      catch (err) {
       
          error("An error occurred. Please try again later.");
        
      }
  
  };

  return (
    <>
   <div className='container'>
   <ToastContainer />
      <div className="wrapper">
        <div className="form-wrapper sign-up">
          <form action="" onSubmit={handleSubmit}>
            <h2>Sign Up</h2>
    
            <div className="profile-container">
             
              <input 
                type="file" 
                id="profile-image" 
                accept="image/*" 
                onChange={handleImageChange} 
              />
              {profilePic && <img src={profilePic} alt="Profile" className="profile-preview" />}
            </div>
            <div className="input-group">
              <input type="text" required  onChange={(e) => setUserName(e.target.value)}/>
              <label>Username</label>
            </div>
            <div className="input-group">
              <input type="email" required  onChange={(e) => setEmail(e.target.value)}/>
              <label>Email</label>
            </div>

            <div className="input-group">
              <input type="number" required  onChange={(e) => setPhoneNo(e.target.value)}/>
              <label>Phone No.</label>
            </div>
            <div className="input-group">
              <input type="password" required onChange={(e) => setPassword(e.target.value)}/>
              <label>Password</label>
            </div>

            <Button type="submit" className='button' text="Sign Up"/>
            <div className="signUp-link">
              <p>Already have an account?   <Link to='/organizer-login'  >
                          Login
                        </Link></p>
            </div>
          </form>
        </div>
        </div>
    </div>
    </>
  );
}

export default AdminRegister;