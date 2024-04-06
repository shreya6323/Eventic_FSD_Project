
// import React, { useState, useEffect } from 'react';
// import './Navbar.css';
// import { Link } from 'react-router-dom';
// import { IonIcon } from '@ionic/react';
// import { ticketOutline } from 'ionicons/icons';
// import SearchBar from './SearchBar';

// function Navbar() {
//     const [click, setClick] = useState(false);
//     const [showOptions, setShowOptions] = useState(false);
//     const [token, setToken] = useState(localStorage.getItem('token'));

//     const handleClick = () => {
//         setClick(!click);
//         setShowOptions(false); // Hide options when menu toggles
//     };

//     const toggleOptions = () => {
//         setShowOptions(!showOptions);
//     };

//     const handleLogout = () => {
//         localStorage.setItem('token', '');
//         setToken('');
//     };

//     const closeMobileMenu = () => {
//         setClick(false);
//     };

//     useEffect(() => {
//         setToken(localStorage.getItem('token'));
//     }, [token]);

//     return (
//         <nav className='navbar'>
//             <div className='navbar-container'>
//                 <Link to="/" className='logo-container' onClick={closeMobileMenu}>
//                     <IonIcon icon={ticketOutline} size="large" className='eventic-logo' />
//                     <span className='logo'>Eventic</span>
//                 </Link>
//                 <div className='menu-icon' onClick={handleClick}>
//                     <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
//                 </div>
//                 <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//                     <li className='nav-item'>
//                         <Link to='/' className='nav-links' onClick={closeMobileMenu}>
//                             Home 
//                         </Link>
//                     </li>
//                     <li className='nav-item'>
//                         <Link to='/UpcomingEvents' className='nav-links' onClick={closeMobileMenu}>
//                             Events 
//                         </Link>
//                     </li>
//                     <li className='nav-item'>
//                         <Link to='/gallery' className='nav-links' onClick={closeMobileMenu}>
//                             Gallery 
//                         </Link>
//                     </li>
//                     <li className='nav-item'>
//                         <Link to='/service' className='nav-links' onClick={closeMobileMenu}>
//                             Service
//                         </Link>
//                     </li>
//                     <li className='nav-item'>
//                         <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
//                             Contact
//                         </Link>
//                     </li>
//                     <li className='nav-item'>
//                         <Link to='/team' className='nav-links' onClick={closeMobileMenu}>
//                             Team
//                         </Link>
//                     </li>
//                     {!token &&  
//                         <li className='nav-item'>
//                             <button className='login-button' onClick={toggleOptions}>
//                                 Login
//                             </button>
//                             {showOptions && (
//                                 <ul className="login-options">
//                                     <li>
//                                         <Link to="/attendee-login" className="login-option-link" onClick={closeMobileMenu}>
//                                             Attendee
//                                         </Link>
//                                     </li>
//                                     <li>
//                                         <Link to="/organizer-login" className="login-option-link" onClick={closeMobileMenu}>
//                                             Organizer
//                                         </Link>
//                                     </li>
//                                 </ul>
//                             )}
//                         </li>
//                     }
//                     {token &&   
//                         <li className='nav-item'>
//                             <button className='login-button' onClick={handleLogout}>
//                                 Logout
//                             </button>
//                         </li>
//                     }
//                     <li>
//                         {/* <SearchBar /> */}
//                     </li>
//                 </ul>
//             </div>
//         </nav>
//     );
// }

// export default Navbar;

import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { IonIcon } from '@ionic/react';
import { ticketOutline } from 'ionicons/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import SearchBar from './SearchBar';
import Profile from './Profile';
function Navbar() {
    const [click, setClick] = useState(false);
    const [showOptions, setShowOptions] = useState(false);
    const [token, setToken] = useState(localStorage.getItem('token'));
   const[showAccount,setShowAccount] = useState(false);
    const handleClick = () => {
        setClick(!click);
        setShowOptions(false); // Hide options when menu toggles
    };

    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    const handleLogout = () => {
        localStorage.setItem('token', '');
        setToken('');
    };

    const closeMobileMenu = () => {
        setClick(false);
    };

    const handleAccount = () =>{
      setShowAccount(!showAccount);
    }

    useEffect(() => {
        setToken(localStorage.getItem('token'));
    }, [token]);

    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='logo-container' onClick={closeMobileMenu}>
                    <IonIcon icon={ticketOutline} size="large" className='eventic-logo' />
                    <span className='logo'>Eventic</span>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home 
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/UpcomingEvents' className='nav-links' onClick={closeMobileMenu}>
                            Events 
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/gallery' className='nav-links' onClick={closeMobileMenu}>
                            Gallery 
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/service' className='nav-links' onClick={closeMobileMenu}>
                            Service
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/contact' className='nav-links' onClick={closeMobileMenu}>
                            Contact
                        </Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/team' className='nav-links' onClick={closeMobileMenu}>
                            Team
                        </Link>
                    </li>
                    {!token &&  
                        <li className='nav-item'>
                            <button className='login-button' onClick={toggleOptions}>
                                Login
                            </button>
                            {showOptions && (
                                <ul className="login-options">
                                    <li>
                                        <Link to="/attendee-login" className="login-option-link" onClick={closeMobileMenu}>
                                            Attendee
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/organizer-login" className="login-option-link" onClick={closeMobileMenu}>
                                            Organizer
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </li>
                    }
                    {token &&   
                        <li className='nav-item'>
                            <button className='profile-icon' onClick={handleAccount}>
                                <FontAwesomeIcon icon={faUserCircle} size="lg" />
                            </button>
                            {(showAccount) && <Profile logout={handleLogout}/>}
                        </li>
                    }
                    <li>
                        {/* <SearchBar /> */}
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;