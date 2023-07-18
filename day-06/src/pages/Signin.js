import React from 'react';
import './Signin.css';
import { Link, useNavigate } from 'react-router-dom';
// import ReCAPTCHA from "react-google-recaptcha";
import w2 from './asserts/w12.png';
import { useState } from 'react';
import { connect } from 'react-redux';

function Signin(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error ,setError] =useState('');
  const [error1 ,setError1] =useState('');
  const navigate=useNavigate();
  
  
  
  const handleSubmit = (e) => {
    e.preventDefault();
    var flag=true;
    if (email.length<5) {
      setError('UserName is invalid');
      flag=false;
    } else {
      setError(null);
    }
    if(password.length<8)
    {
      flag=false;
      setError1('Invalid password');
    }
    else
    {
      setError1(null);
    }
    if(flag){
      props.setUsername(email);
      navigate('/');
    }
  };

  
  return(
    <div className="App1">
      
      <div className='contents'>
      <center>
        <h1>E-Book Store</h1>
        <h2>Log-In:</h2>
        {/* <label>UserName</label><br></br> */}
        <input type='text' placeholder='User Name' onChange={(e) => setEmail(e.target.value)}></input>
        {/* <label>Password</label> */}
        <p >{error}</p>
        <input type='password' placeholder='Password' onChange={(e) => setPassword(e.target.value)}></input>
        <div className='sinbttn'>
          <p>{error1}</p>
        {/* <ReCAPTCHA
    sitekey="6Le71QsnAAAAAMbZCj58YTGWgPg7pc8_LqzHBzxm"
/><br></br> */}
        <button type='submit' id='sin1' onClick={handleSubmit}>Log in</button>
        </div>
        <div className='link'>
          <div className='fp'>
        <a href='www.google.com'>Forget Password</a>
        </div>
        <div className='sup'>
        <Link to='/Signup'>Sign up</Link>
        </div>
        </div>
      </center>
      </div>
      <div className='simg'>
        <img src={w2} className='sim'></img>
      </div>
      {/* <div className='side'>
        <img src={w2} class='img1'/>
      </div> */}
    </div>
  );
}
const mapdispatchtoprops=(dispatch)=>{
  return {setUsername:(username)=>{dispatch({type:"setUsername",username:username})}
}
}

export default connect(null,mapdispatchtoprops)(Signin);



 // handleChange(event) {
  //   let input = this.state.input;
  //   input[event.target.name] = event.target.value;

  //   this.setState({
  //     input
  //   });
  // }
  // // const navigate=useNavigate();
  // handleSubmit(event) {
  //   event.preventDefault();

  //   if (this.validate()) {

  //     let input = {};
  //     input["username"] = "";
  //     input["email"] = "";
  //     input["password"] = "";
  //     input["confirm_password"] = "";
  //     this.setState({ input: input });
  //   }
  // }
  // validate() {
  //   let input = this.state.input;
  //   let errors = {};
  //   let isValid = true;

  //   if (!input["username"]) {
  //     isValid = false;
  //     errors["username"] = "Please enter your username.";
  //   }

  //   if (typeof input["username"] !== "undefined") {
  //     const re = /^\S*$/;
  //     if (input["username"].length < 6 || !re.test(input["username"])) {
  //       isValid = false;
  //       errors["username"] = "Please enter valid username.";
  //     }
  //   }

  //   if (!input["email"]) {
  //     isValid = false;
  //     errors["email"] = "Please enter your email Address.";
  //   }

  //   if (typeof input["email"] !== "undefined") {
  //     var pattern = new RegExp(
  //       /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
  //     );
  //     if (!pattern.test(input["email"])) {
  //       isValid = false;
  //       errors["email"] = "Please enter valid email address.";
  //     }
  //   }

  //   if (!input["password"]) {
  //     isValid = false;
  //     errors["password"] = "Please enter your password.";
  //   }

  //   if (!input["confirm_password"]) {
  //     isValid = false;
  //     errors["confirm_password"] = "Please enter your confirm password.";
  //   }

  //   if (typeof input["password"] !== "undefined") {
  //     if (input["password"].length < 6) {
  //       isValid = false;
  //       errors["password"] = "Please add at least 6 charachter.";
  //     }
  //   }

  //   if (
  //     typeof input["password"] !== "undefined" &&
  //     typeof input["confirm_password"] !== "undefined"
  //   ) {
  //     if (input["password"] != input["confirm_password"]) {
  //       isValid = false;
  //       errors["password"] = "Passwords don't match.";
  //     }
  //   }

  //   this.setState({
  //     errors: errors
  //   });

  //   return isValid;
  // }