import React from 'react'
import "../Styles/Register.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="registerBox">
    <h1>Sign Up</h1>
    <form className='registerForm'>
      <input className='textField' 
        name="name"
        placeholder='name'
      />
      <input className='textField'
        name="email"
        placeholder='email'
      />
       <input className='textField' 
        name="phone"
        placeholder='phone number'
      />
       <input className='textField' 
        name="work"
        placeholder='work'
      />
      <input className='textField'
        type="password"
        name="password"
        placeholder='password'
      />
      <input className='textField'
        type="password"
        name="pwconfirm"
        placeholder='password'
      />
      <br />
    </form>
    <p>
      Aleady have an account? <br />
      <Link to= "/login">Log in here</Link>
    </p>
  </div>
  )
}

export default Register