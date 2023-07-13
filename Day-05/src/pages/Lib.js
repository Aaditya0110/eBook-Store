import React from 'react';
import './Lib.css';
import { Link } from 'react-router-dom';
import Nav from './Nav';
import BTemp from '../Book/BTemp';

function Lib() {
  return(
    <div>
      <div className='naval'>
         <Nav/>
      </div>
      <div className='books2'>
        <BTemp/>
        <BTemp/>
        <BTemp/>
        <BTemp/>
      </div>
    </div>
  );
}

export default Lib;