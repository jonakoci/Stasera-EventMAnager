import React, {useState, useEffect} from 'react'
import "./UserDetails.css"
import axios from 'axios';
import {useNavigate, useParams } from "react-router-dom";


function UserDetails() {
    const [fullName, setFullName]= useState("");
    const [username, setUsername]= useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    // const [error, setError] = useState('')
    const {id}= useParams()
    const navigate=useNavigate()

    useEffect(()=>{
        axios.get(`http://localhost:8000/user/${id}`)
        .then (res=> {
          console.log (res.data)
          setFullName(res.data.title)
          setUsername(res.data.imageUrl)
          setEmail(res.data.date)
          setPassword(res.data.guests)
        })
        .catch(err=>console.log("errrrrrr"+err))
    
      })

    const updateUser = () => {
        axios.put(`http://localhost:8000/user/${id}`, {
            fullName,
            username,
            email,
            password

        })
        .then(res => {
          console.log(res)})
          navigate ("/dashboard")
          alert("Profile updated successfully")
        .catch(err => {
          console.log(err)
        //   setError(err.response.data.error)
        })
    }

  return (
    <div className='container mt-5'>
      <div class="row d-flex justify-content-center">
        
        <div class="col-md-7">
            
            <div class="card p-3 py-4">
                
                <div class="text-center mt-3">
                    <h1 class="bg-secondary p-1 px-4 rounded text-white">Party People</h1>
                    <input class="mt-2 mb-0" value={fullName} onChange={(e) => setFullName(e.target.value)}></input> 
                    <div class="px-4 mt-1">
                        <input class="fonts" value={username} onChange={(e) => setUsername(e.target.value)}> </input>
                        <input class="fonts" value={email} onChange={(e) => setEmail(e.target.value)}> </input>
                        <input class="fonts" value={password} onChange={(e) => setPassword(e.target.value)}> </input>
                    </div>
                    
                    <div class="buttons">
                        
                        <button class="btn btn-outline-primary px-4" onClick={updateUser}>Edit Info</button>
                        <button class="btn btn-danger px-4 ms-3">Delete Account</button>
                    </div>
                    
                    
                </div>
                
            </div>
      
        </div>
        
    </div>
    </div>
  )
}

export default UserDetails
