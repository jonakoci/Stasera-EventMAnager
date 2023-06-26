import React, {useState} from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function UserReg() {
    const navigate = useNavigate()
    const [fullName, setFullName]= useState("");
    const [username, setUsername]= useState("");
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [validation, setValidation] = useState({})

    const registerUser = () =>{
        axios.post("http://localhost:8000/user/create", {
            fullName,
            username,
            email,
            password
        })
        .then ((res)=>{
            console.log(res.data)
            navigate ("/dashboard")
        })
        .catch((err)=>{
            console.log (err.response.data)
            setValidation(err.response.data.err.errors);
        })
    }

    return (
        <div>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col">
                        <div className="card">
                            <div className="card-body p-5">
                                <h2 className="text-uppercase text-center mb-5">Register</h2>
                                <form>
                                    <div className="form-outline mb-4">
                                        <input type="text"  className="form-control form-control-lg" onChange = {(e)=>setFullName(e.target.value)}/>
                                        <label className="form-label" >Full Name</label> <br />
                                        <p style={{color:"red"}}>{ validation.fullName? validation.fullName.message : ""}</p>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input type="text"  className="form-control form-control-lg" onChange = {(e)=>setUsername(e.target.value)}/>
                                        <label className="form-label" >User Name</label> <br />
                                        <p style={{color:"red"}}>{ validation.username? validation.username.message : ""}</p>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="email"  className="form-control form-control-lg" onChange = {(e)=>setEmail(e.target.value)} />
                                        <label className="form-label">Email</label> <br />
                                        <p style={{color:"red"}}>{ validation.email? validation.email.message : ""}</p>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="password" className="form-control form-control-lg" onChange = {(e)=>setPassword(e.target.value)}/>
                                        <label className="form-label">Password</label> <br />
                                        <p style={{color:"red"}}>{ validation.password? validation.password.message : ""}</p>
                                    </div>

                                    {/* <div class="form-outline mb-4">
                                        <input type="password"  class="form-control form-control-lg" onChange = {(e)=>setConfirmPass(e.target.value)}/>
                                        <label class="form-label" >Repeat your password</label>
                                    </div> */}

                                    <div className="d-flex justify-content-center">
                                        <button type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={registerUser}>Register</button>
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