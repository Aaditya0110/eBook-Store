import './CTemp.css';
import React from 'react';
import bg from './novel.jpg';
import { useNavigate } from 'react-router-dom';

function BTemp() {
  const navigate=useNavigate();
const Bk=()=>{
     navigate('/Bpage');
}

  return(
    <div className='cBook' onClick={Bk}>
      <div className='imgs'>
        <img src={bg} id='im4'></img>
      </div>
      <div className='cnt'>
        <h2>Title:</h2>
        <div>Author:</div>
        <div>Price:</div>
        <div>Rating: -/5</div><br></br>
      <button>Remove</button>
      </div>
    </div>
  );
}

export default BTemp;