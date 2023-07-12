import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function UserLog() {
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [validation, setValidation] = useState()
    const navigate = useNavigate()

    // const navigate = useNavigate()


    const loginUser = () =>{
        axios.post("http://localhost:8000/user/login", {
            email,
            password
        })
        .then ((res)=>{
            navigate ("/dashboard")
            localStorage.setItem('userId',res.data.user._id)
        })
        .catch((err)=>{
            console.log(err.response.data.error)
            setValidation(err.response.data.error);
        })
    }



  return (
    <div>
        <div>
            <div className="container">
                <div className="row d-flex justify-content-center align-items-center">
                    <div className="col">
                        <div className="card">
                            <div className="card-body p-5">
                                <h2 className="text-uppercase text-center mb-5">Login</h2>
                                <form>
                                    <div className="form-outline mb-4">
                                        <input type="email"  className="form-control form-control-lg" onChange = {(e)=>setEmail(e.target.value)} />
                                        <label className="form-label"> Email</label> 
                                        {/* <p style={{color:"red"}}>{ validation.email? validation.email.message : ""}</p> */}

                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="password" className="form-control form-control-lg" onChange = {(e)=>setPassword(e.target.value)}/>
                                        <label className="form-label">Password</label> <br />
                                        <p style={{color:"red"}}>{ validation? validation : ""}</p>

                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <button type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={loginUser}>Login</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default UserLog;