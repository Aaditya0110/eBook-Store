import React from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Accounts.css'
import Nav from "../Nav";
import user from '../AccIcon/user.jpg'
import { connect } from "react-redux";

function Account(props){
    return(
        <div className="acc">
            <div className="tp">
                <div className="uIcon">
                    <img src={user} id='uic'></img>
            <div>User Name:{props.username}</div>
            </div>
            <div>Phone:</div>
            <div>EMail:</div>
            <div>DOB:</div>
                </div>
        </div>
    );
}

const mapstateToprops=(state)=>{
    return{
      username:state.username
    }
  }
  
export default connect(mapstateToprops)(Account);

