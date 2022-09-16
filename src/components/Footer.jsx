import React from 'react';
import '../App.css';
import { useStateContext } from '../contexts/ContextProvider';

const Footer = () => {
  const {currentColor} = useStateContext();
  const date = new Date().getFullYear()
  return (
    <div className='footer' style={{backgroundColor: currentColor}}>
    <p className='footer-p'>
      &copy;Bojan {date}
      </p>
      </div>
 
  )
}

export default Footer