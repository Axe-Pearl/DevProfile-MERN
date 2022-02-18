import React,{useState} from 'react';
import "../Styles/Login.css";
import { Link,useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const[password, setPassword] = useState("");
  const navigate = useNavigate();

  const loginUser = async (e)=>{
    e.preventDefault();

    const res = await fetch("/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email,
        password
      })
    });
    const data = await res.json();
    console.log("data status: ", res.status);
    if(res.status === 400 || !data){
      console.log("Invalid Input");
    }
    else{
      console.log("data was as follows:",data);
      console.log(data.message);
      navigate("/");
    }
  }

  return (
    <div className="loginBox">
    <h1>Login</h1>
    <form className='loginForm' method='POST'>
      <input className='textField'
        name="email"
        value = {email}
        onChange = {(e)=>setEmail(e.target.value)}
        placeholder='email'
      />
      <input className='textField'
        type="password"
        name="password"
        value={password}
        onChange = {(e)=>setPassword(e.target.value)}
        placeholder='password'
      />
      <button className="loginBtn" onClick={loginUser}>Login</button>
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