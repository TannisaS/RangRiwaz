import React from 'react';
import './CSS/LoginSignUp.css';

const Login = () => {
  return (
    <div className='login-signup'>
      <div className='signup'>
        <h1>Sign Up</h1>
        <div className='signup-holder'>
          <input type='text' placeholder='Your Name'/>
          <input type='email' placeholder='Your Email'/>
          <input type='password' placeholder='Your Password'/>
        </div>
        <button>Continue</button>
        <p className='Login'>Already have an acoount?<span>Login</span></p>
        <input type='checkbox' name='' id=''/>
        <p>By continuing,I agree to use the terms of use and policy</p>
      </div>
    </div>
  )
}

export default Login;

