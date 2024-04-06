import React, { useEffect } from 'react';
import './SearchBar.css';
import{BsSearch} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useState,setActive } from 'react';
export default function SearchBar()
{
    
    
  return(
      
           
          
          
           <Link to="/home">
            
         
         <button className='search-button'><BsSearch   size={15}/></button>
           </Link>      
    )
}