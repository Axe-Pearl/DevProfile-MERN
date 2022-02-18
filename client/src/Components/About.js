import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";
import "../Styles/About.css";

function About() {
   const [userData ,setUserData] = useState({});
   const navigate = useNavigate();
   const callAboutPage = async()=>{
        try{
            const res = await fetch("/about",{
                method:"GET",
                headers:{
                    Accept:"application/json",
                    "Content-Type":"application/json"
                },
                credentials:'include'
            });
            const data = await res.json();
            console.log("data is here for about page:", data);
            setUserData(data);
            console.log("current user is:", userData);
            if(!res.status === 200){
                const error = new Error(res.error);
                throw error;
            }
        }
        catch(err){
            console.log("Following error:", err);
            navigate("/login");
        }
   }

    useEffect(()=>{
      callAboutPage();
    },[])
  return (
   <>
    <div>
    <table id='user'>
  <tr>
    <th>Name</th>
    <th>Email</th>
    <th>Contact</th>
    <th>Work</th>
  </tr>
  <tr>
    <td>{userData.name}</td>
    <td>{userData.email}</td>
    <td>{userData.phone}</td>
    <td>{userData.work}</td>
  </tr>
</table>
    </div>
   </>
  )
}

export default About