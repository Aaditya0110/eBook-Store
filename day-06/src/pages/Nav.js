import React from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './nav.css';
import { useState } from 'react';
import Signin from './Signin';
import SearchIcon from '@mui/icons-material/Search';
import { connect } from 'react-redux';


function Nav(props) {
  var flag=true;
  const display = () =>{
    if(flag==true){
      document.getElementById('acc').style.display='block';
      document.getElementById('acc').style.zIndex='9999';
      // document.getElementById('acc').style.position;
      flag=false;
    }
    else{
      flag=true;
      document.getElementById('acc').style.display='none';
    }
  }
  
  const[classn,setClass]=useState("sb1");
  const[menu,setDiv]=useState("m1");
  const side = () =>{
    if(classn=="sb1")
    {
        setClass("sb2");       
        setDiv("m2");     
    }
    else{
        setClass("sb1");
        setDiv("m1");
    }
  }


  return(
    <div className='navb'>
       <div className={classn}>
        <div className={menu} onClick={side}><MenuIcon/></div>
          <div id='si1'><Link to='/Gpage'>All Books</Link></div>
          <div id='si1'><Link to='/Gpage'>Novels</Link></div>
          <div id='si1'><Link to='/Gpage'>Comics &Manga</Link></div>
          <div id='si1'><Link to='/Gpage'>Science Fiction</Link></div>
          <div id='si1'><Link to='/Gpage'>Mystery &Horror</Link></div>
          <div id='si1'><Link to='/Gpage'>Children's</Link></div>
          <div id='si1'><Link to='/Gpage'>History</Link></div>
          <div id='si1'><Link to='/Gpage'>Bussines &Economy</Link></div>
          <div id='si1'><Link to='/Gpage'>Educational</Link></div>
          <div id='si1'><Link to='/Gpage'>Guides,Cookbooks &Art</Link></div>
          <div id='si1'><Link to='/Gpage'>Devotional</Link></div>
        
       </div>
       <div>
       <ul id='ul1'>
       <li><div className={menu} onClick={side}><MenuIcon/></div></li>
        <li><div id='l1'><Link to='/'>Home</Link></div></li>
        <li><div id='l1'><Link to='/Library'>Library</Link></div></li>
        <li><div className='search'>
      <input type="text" id="searchb" placeholder='Search'></input>
      {/* <SearchIcon id='sicon'></SearchIcon> */}
      </div>
      </li>
        <div id='useri' onClick={display}><AccountCircleIcon fontSize='medium'/></div>
       </ul>
      <div id='acc'>
        {(props.username=="" && <div id='lelem'><Link to='/Signin'>Log in</Link></div>) ||
         (props.username!="" &&
        <div id='m'>{props.username}</div>)}
        <div id='lelem'><Link to='/Account'>Profile</Link></div>
        <div id='lelem'><Link to='/Orders'>Your Cart</Link></div>
      </div>
      </div>
    </div>
  );
}
const mapstateToprops=(state)=>{
  return{
    username:state.username
  }
}

export default connect(mapstateToprops)(Nav);