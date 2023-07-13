import React from 'react';
// import './Home.css';
// import Nav from './Nav';
import './Bar.css';
import Bseller from './himages/Bseller.webp'
import school from './himages/school.jpg'
import novel from './himages/novel.jpg'
import manga from './himages/manga.jpg'
import bio from './himages/bio2.jpeg'
import bussiness from './himages/bussiness.jpeg'

function Bar() {
  return(
    <div className='Ball'>
      <ul id='ul2'>
      <div className='bseller'>
          <img src={Bseller} id='bimg'  className='bimg2'></img>
          <div className='bi1'>BEST SELLERS</div>
      </div>
      <div className='bseller' id='schl'>
          <img src={school} id='bimg' className='bimg2'></img>
          <div className='bi1' id='bi2'>NEW ARRIVALS</div>
      </div>
      <div className='bseller' id='schl'>
          <img src={novel} id='bimg' className='bimg2'></img>
          <div className='bi1' id='bi2'>RECOMENDED</div>
      </div>
      <div className='bseller' id='schl'>
          <img src={manga} id='bimg' className='bimg2'></img>
          <div className='bi1' id='bi2'>EDITOR'S CHOICE</div>
      </div>
      <div className='bseller' id='schl'>
          <img src={bio} id='bimg' className='bimg2'></img>
          <div className='bi1' id='bi2'>TOP PICKS</div>
      </div>
      </ul>
    </div>
  );
}

export default Bar;