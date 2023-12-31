import React, {useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function BusinessLog() {
    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const [validation, setValidation] = useState()
    const navigate = useNavigate()


    const loginBusiness = () =>{
        axios.post("http://localhost:8000/business/login", {
            email,
            password
        })
        .then ((res)=>{
            navigate ("/dashboard")
            console.log(res)
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
                                        <button type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={loginBusiness}>Login</button>
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

export default BusinessLog;