import React from 'react';
import './Contact.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import Button from './Button';
import Icon from '@mui/material/Icon';

const Contact = () => {
    const focusFunc = (e) => {
        let parent = e.target.parentNode;
        parent.classList.add("focus");
    }

    const blurFunc = (e) => {
        let parent = e.target.parentNode;
        if (e.target.value === "") {
            parent.classList.remove("focus");
        }
    }

    return (
        <div className="container">
            
            <div className="form">
                <div className="contact-info">
                    <h3 className="title">Let's get in touch</h3>
            
                    <div className="info">
            <div className="information">
            <LocationOnIcon className="icons" />
                <p>92 Cherry Drive Uniondale, GUJ 11553</p>
            </div>
            <div className="information">
            <EmailIcon className="icons"/>
                <p>eventic@gmail.com</p>
            </div>
            <div className="information">
            <PhoneIcon  className="icons"/>
                <p>123-456-789</p>
            </div>
        </div>

                    <div className="social-media">
                        <p className="connect">Connect with us :</p>
                        <div className="social-icons">
                            <a href="/">
                            <Icon className="fab fa-facebook-f"></Icon>
                            </a>
                            <a href="/">
                                <i className="fab fa-twitter"></i>
                            </a>
                            <a href="/">
                            <span className="icons fab fa-instagram"></span>
                            </a>
                            <a href="/">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact-form">
                    

                    <form autoComplete="off">
                        <h3 className="title">Contact us</h3>
                        <div className="input-container">
                            <input type="text" name="name" className="input" onFocus={focusFunc} onBlur={blurFunc} />
                            <label htmlFor="">Username</label>
                            <span>Username</span>
                        </div>
                        <div className="input-container">
                            <input type="email" name="email" className="input" onFocus={focusFunc} onBlur={blurFunc} />
                            <label htmlFor="">Email</label>
                            <span>Email</span>
                        </div>
                        <div className="input-container">
                            <input type="tel" name="phone" className="input" onFocus={focusFunc} onBlur={blurFunc} />
                            <label htmlFor="">Phone</label>
                            <span>Phone</span>
                        </div>
                        <div className="input-container textarea">
                            <textarea name="message" className="input" onFocus={focusFunc} onBlur={blurFunc}></textarea>
                            <label htmlFor="">Message</label>
                            <span>Message</span>
                        </div>
                        <Button text="Send"  className='btn' />
                        {/* <input type="submit" value="Send" className="btn" /> */}
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;