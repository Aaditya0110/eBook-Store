import React from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './nav.css';
import Signin from './Signin';


function Nav() {
  var flag=true;
  const display = () =>{
    if(flag==true){
    document.getElementById('acc').style.display='block';
    flag=false;
    }
    else{
      flag=true;
      document.getElementById('acc').style.display='none';
    }
  }
  return(
    <div>
      <div className='naval'>
       <ul>
      <li><div className='menu'><MenuIcon/></div></li>
        <li><div id='l1'><Link to='/'>Home</Link></div></li>
        <li><Link to='/Library'>Library</Link></li>
        <div id='useri' onClick={display}><AccountCircleIcon fontSize='medium'/></div>
       </ul>
      <div id='acc'>
        <div id='lelem'><Link to='/Signin'>Log in</Link></div>
        <div id='lelem'><Link to='/Orders'>Orders</Link></div>
      </div>
      </div>
    </div>
  );
}

export default Nav;