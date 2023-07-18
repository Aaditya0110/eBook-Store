import React from 'react';
// import './Home.css';
// import Nav from './Nav';
// import Bar from './homeComponents/Bar';
import Nav from '../Nav';
import Sortf from './Sortf';
import './Gpage.css'
import BTemp from '../../Book/BTemp';

function Gpage() {
  return(
    <div className='All'>
      <div className='naval'>
       <Nav/>
      </div>
      <div className='sr'>
      <Sortf/>
      </div>
      {/* <br/> */}
      <div className='GBooks'>
        <BTemp/>
        <BTemp/>
        <BTemp/>
        <BTemp/>
        <BTemp/>
        <BTemp/>
        <BTemp/>
      </div>
    </div>
  );
}

export default Gpage;