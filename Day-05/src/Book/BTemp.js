import './BTemp.css';
import React from 'react';
import bg from './novel.jpg';

function BTemp() {
  return(
    <div className='Book'>
      <div className='imgs'>
        <img src={bg} id='im'></img>
      </div>
      <div className='cnt'>
        <h1>Title:</h1>
        <div>Author:</div>
        <div>Price:</div>
        <div>Rating: -/5</div>
      </div>
    </div>
  );
}

export default BTemp;