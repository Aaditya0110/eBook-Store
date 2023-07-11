import React, { useState } from 'react';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';

function Signup() {
  const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [cpassword,setcpassword] = useState('');
    const [Error1,setNameError] = useState('');
    const [Error2,setEmailError] = useState('');
    const [Error3,setPasswordError] = useState('');
    const [Error4,setcpasswordError] = useState('');
    const navigate=useNavigate();
    
    const handleSubmit = (event) => {
        event.preventDefault();
        validate();
    }
    const validate = () => {
        let isValid = true;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const strWithNum = /\d/;
        let isValidStr;
        if(name === "") {
            setNameError("Name is required");
            isValid = false;
        }
        else if((strWithNum.test(name))) {
            setNameError("Name cannot contain numbers");
        }
        if(email === "") {
            setEmailError("Email is required");
            isValid = false;
        }
        else if(!(emailRegex.test(email))) {
            setEmailError("Invalid Email");
            isValid = false;
        }
        
        if(password === "") {
            setPasswordError("Password is required");
            isValid = false;
        }
        else if(password.length < 8) {
            setPasswordError("Password length must be greater than 8");
            isValid = false;
        }
        if(cpassword === "") {
            setcpasswordError("Re-type password");
            isValid = false;
        }
        else if(password !== cpassword) {
            setcpasswordError("Password doesn't match");
        }

        if(isValid) {
          navigate('/Signin');
        }

    }
  
    return (
      <div class="App">
        <center>
        <div className='contents1'>
        <h1>
          Sign-Up
        </h1>
          <div class="form-group">
            {/* <label for="username">Username</label> */}
            <input
              type="text"
              name="username"
              class="form-control"
              id="username"
              placeholder='Username'
              onChange={(e) => setName(e.target.value)}
            />

          </div>
            <p>{Error1}</p>

          <div class="form-group">
            {/* <label for="email">Email Address</label>*/}
            <br></br>
            <input
              type="text"
              name="email"
              class="form-control"
              id="email"
              placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
            />
          
          </div>
          <p>{Error2}</p>
          <div class="form-group">
            {/* <label for="password">Password</label> */}
            <br></br>
            <input
              type="password"
              name="password"
              class="form-control"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Password'
            />
        
          </div>
          <p>{Error3}</p>

          <div class="form-group">
            {/* <label for="password">Confirm Password</label> */}
            <br></br>
            <input
              type="password"
              name="confirm_password"
              class="form-control"
              id="confirm_password"
              onChange={(e) => setcpassword(e.target.value)}
              placeholder='Confirm Password'
            />

          </div>
          <p>{Error4}</p>
          <button onClick={handleSubmit} id='sin'>Sign up</button>
          <div id='log'>
        <Link to='/Signin'>Log in</Link>
        </div>
        </div>
        </center>
      </div>
    );
  
}

export default Signup;