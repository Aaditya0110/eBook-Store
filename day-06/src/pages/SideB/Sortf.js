import React from 'react';
// import './Home.css';
// import Nav from './Nav';
// import Bar from './homeComponents/Bar';
// import Nav from '../../Nav';

function Sortf() {
  return(
    <div className='Sort'>
        Sort:
       <select name='sorts'>
       <option value='Author'>Default</option>
        <option value='Author'>Price High-Low</option>
        <option value='Author'>Price Low-High</option>
        <option value='Author'>Rating High-Low</option>
        <option value='Author'>Rating Low-High</option>
        <option value='Author'>Pages High-Low</option>
        <option value='Author'>Pages Low-High</option>
       </select>
    </div>
  );
}

export default Sortf;