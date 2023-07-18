import './BTemp.css';
import React from 'react';
import bg from './novel.jpg';
import './Asthetic.css';
import { useNavigate } from 'react-router-dom';

function Asthetic() {
  const navigate=useNavigate();
  const Bk=()=>{
       navigate('/Bpage');
  }
  
  return(
    <div className='Book1' onClick={Bk}>
        <img src={bg} className='imgs5'></img>
        <div className='cunt'>Title</div>
    </div>
  );
}

export default Asthetic;