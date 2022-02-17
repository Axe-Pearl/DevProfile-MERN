import React, {useState} from 'react'
import "../Styles/Register.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();
  const [user,setUser] = useState({
    name:"", email:"", phone:"", work:"", password:"", cpassword:""
  });
  let name, value;
 const handleChange = (e)=>{
   name = e.target.name;
   value = e.target.value;
   setUser({...user, [name]:value});
 }
 const handleSubmit = async (e)=>{
   e.preventDefault();
   const { name, email, phone, work, password, cpassword} = user;
   console.log("working from frontend");
   const res = await fetch("http://localhost:3000/register",{
     method:"POST",

     headers:{
       "Content-Type":"application/json"
     },
     body:JSON.stringify({
      name, email, phone, work, password, cpassword
     })
   });
   const data = await res.json();
   if(data.status === 422 || !data){
     console.log("Invalid Registeration");
   }
   else{
     console.log("data was as follows:",data);
     console.log(data.message);
     navigate("/");
   }
 }
  return (
    <div className="registerBox">
    <h1>Sign Up</h1>
    <form className='registerForm'>
      <input onChange = {handleChange} className='textField' 
        name="name"
        value = {user.name}
        placeholder='name'
      />
      <input onChange = {handleChange} className='textField'
        name="email"
        value = {user.email}
        placeholder='email'
      />
       <input onChange = {handleChange} className='textField' 
        name="phone"
        value = {user.phone}
        placeholder='phone number'
      />
       <input onChange = {handleChange} className='textField' 
        name="work"
        value = {user.work}
        placeholder='work'
      />
      <input onChange = {handleChange} className='textField'
        type ="password"  value ={user.password}
        name="password"
        placeholder='password'
      />
      <input onChange = {handleChange} className='textField'
        type = "password" value = {user.cpassword}
        name="cpassword"
        placeholder='confirm password'
      />
      <button className="signupBtn" onClick = {handleSubmit}>Register</button>
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