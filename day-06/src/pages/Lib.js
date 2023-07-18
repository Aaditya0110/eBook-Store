import React from 'react';
import './Lib.css';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import Asthetic from '../Book/Asthetic'

function Lib() {
  return(
    <div>
      <div className='naval'>
         <Nav/>
      </div>
      <div className='books2'>
        <Asthetic/>
        <Asthetic/>
        <Asthetic/>
        <Asthetic/>
        <Asthetic/>
        <Asthetic/>
        <Asthetic/>
        <Asthetic/>
      </div>
    </div>
  );
}

export default Lib;