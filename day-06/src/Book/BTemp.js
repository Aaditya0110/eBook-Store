import './BTemp.css';
import React from 'react';
import bg from './novel.jpg';
import { useNavigate } from 'react-router-dom';
import Rating from '@mui/material/Rating';


function BTemp() {
  const navigate=useNavigate();
const Bk=()=>{
     navigate('/Bpage');
}

  return(
    <div className='Book' onClick={Bk}>
      <div className='imgs'>
        <img src={bg} id='im'></img>
      </div>
      <div className='cnt'>
        <h2>Title:</h2>
        <div id='a'>Author:</div>
        <div id='a'>Price:</div>
        <div id='a'>Genre:</div>
        <div id='a'>Age Rating:</div>
        <div id='a'><Rating/></div>
      </div>
    </div>
  );
}

export default BTemp;