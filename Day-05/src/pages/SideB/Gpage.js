import React from 'react';
// import './Home.css';
// import Nav from './Nav';
// import Bar from './homeComponents/Bar';
import Nav from '../Nav';
import Sortf from './Sortf';
import './Gpage.css'

function Gpage() {
  return(
    <div className='All'>
      <div className='naval'>
       <Nav/>
      </div>
      <div className='sr'>
      <Sortf/>
      </div>
    </div>
  );
}

export default Gpage;