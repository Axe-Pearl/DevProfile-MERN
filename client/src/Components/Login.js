import React from 'react';
import "../Styles/Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="loginBox">
    <h1>Login</h1>
    <form className='loginForm'>
      <input className='textField'
        name="email"
        placeholder='email'
      />
      <input className='textField'
        type="password"
        name="password"
        placeholder='password'
      />
      <button className="loginBtn" type='submit'>Login</button>
      <br />
    </form>
    <p>
      Don't have an account? <br />
      <Link to = "/">SignUp here</Link>
    </p>
  </div>
  )
}

export default Login