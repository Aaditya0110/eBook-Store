import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import Nav from './Nav';

function Lib() {
  return(
    <div>
      <div className='naval'>
         <Nav/>
      </div>
    </div>
  );
}

export default Lib;