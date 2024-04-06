import React,{useState} from 'react';
import './Auth.css';
import { Link } from 'react-router-dom';
import {ToastContainer,toast} from 'react-toastify' ;

import Button from './Button';

function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const error = (error_msg) => toast.error(error_msg);
const success = (success_msg) => toast.success(success_msg);
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userName, password }),
    });
    if(response.ok)
    {

      const token = response.headers.get('Authorization').split(' ')[1]; // Extract token from header
      console.log(token);
      localStorage.setItem('token', token); // Store token in local storage
      success('Successfully Logged In !');//why it is not showing the pop up!!
      window.location.href = '/';
 
    }
    else if(response.status === 401)
    {
      error ('Invalid username or password !');
    }
   
    else{
      console.log(response.data);
      error("An error occurred. Please try again later.");
    }
  }
    catch (err) {
     
        error("An error occurred. Please try again later.");
      
    }

};
  
  return (
    <div className='container'>
      <ToastContainer />
      <div className="wrapper">
        <div className="form-wrapper sign-in">
          <form action="" onSubmit={handleSubmit}>
            <h2>Login</h2>
            <div className="input-group">
              <input type="text" required value={userName} onChange={(e) => setUserName(e.target.value)}/>
              <label>Username</label>
            </div>
            <div className="input-group">
              <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)}/>
              <label>Password</label>
            </div>
           
            <Button type="submit" text="Login" className='button'/>
            <div className="signUp-link">
              <p>Don't have an account?   <Link to='/attendee-register'  >
                          Register
                        </Link></p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;