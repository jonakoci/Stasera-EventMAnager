import React, {useState} from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function UserReg() {
    // const navigate = useNavigate()
    const [name, setName]= useState("");
    const [userName, setUserName]= useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");

    const registerUser = () =>{
        axios.post("http://localhost:8000/user/create", {
            name,
            userName,
            email,
            password
        })
        .then ((res)=>{
            console.log(res.data)
            // navigate ("/")
        })
        .catch((err)=>{
            // alert("Please revise all fields")
            console.log (err.response.data)
        })
    }

    return (
        <div>
            <div class="container">
                <div class="row d-flex justify-content-center align-items-center">
                    <div class="col">
                        <div class="card">
                            <div class="card-body p-5">
                                <h2 class="text-uppercase text-center mb-5">Register</h2>
                                <form>
                                    <div class="form-outline mb-4">
                                        <input type="text"  class="form-control form-control-lg" onChange = {(e)=>setName(e.target.value)}/>
                                        <label class="form-label" >Full Name</label>
                                    </div>
                                    <div class="form-outline mb-4">
                                        <input type="text"  class="form-control form-control-lg" onChange = {(e)=>setUserName(e.target.value)}/>
                                        <label class="form-label" >User Name</label>
                                    </div>

                                    <div class="form-outline mb-4">
                                        <input type="email"  class="form-control form-control-lg" onChange = {(e)=>setEmail(e.target.value)} />
                                        <label class="form-label">Your Email</label>
                                    </div>

                                    <div class="form-outline mb-4">
                                        <input type="password" class="form-control form-control-lg" onChange = {(e)=>setPassword(e.target.value)}/>
                                        <label class="form-label">Password</label>
                                    </div>

                                    {/* <div class="form-outline mb-4">
                                        <input type="password"  class="form-control form-control-lg" onChange = {(e)=>setConfirmPass(e.target.value)}/>
                                        <label class="form-label" >Repeat your password</label>
                                    </div> */}

                                    <div class="d-flex justify-content-center">
                                        <button type="button" class="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={registerUser}>Register</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
            )
}
 export default UserReg;