import React, {useState} from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


function BusinessReg() {
    // const navigate = useNavigate()
    const [businessName, setBusinessName]= useState("");
    const [email, setEmail]= useState("");
    const [phoneNr, setPhoneNr]= useState("");
    const [address, setAddress]= useState("");
    const [password, setPassword]= useState("");
    const [validation, setValidation] = useState({})

    const registerBusiness = () =>{
        axios.post("http://localhost:8000/business/create", {
            businessName,
            email,
            phoneNr,
            address,
            password
        })
        .then ((res)=>{
            console.log(res.data)
            // navigate ("/")
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
                                        <input type="text"  className="form-control form-control-lg" onChange = {(e)=>setBusinessName(e.target.value)}/>
                                        <label className="form-label" >Business Name</label> <br />
                                        <p style={{color:"red"}}>{ validation.businessName? validation.businessName.message : ""}</p>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="email"  className="form-control form-control-lg" onChange = {(e)=>setEmail(e.target.value)} />
                                        <label className="form-label">Email</label> <br />
                                        <p style={{color:"red"}}>{ validation.email? validation.email.message : ""}</p>
                                    </div>
                                    <div className="form-outline mb-4">
                                        <input type="text"  className="form-control form-control-lg" onChange = {(e)=>setPhoneNr(e.target.value)}/>
                                        <label className="form-label" >Phone Number</label> <br />
                                        <p style={{color:"red"}}>{ validation.phoneNr? validation.phoneNr.message : ""}</p>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="email"  className="form-control form-control-lg" onChange = {(e)=>setAddress(e.target.value)} />
                                        <label className="form-label">Address</label> <br />
                                        <p style={{color:"red"}}>{ validation.address? validation.address.message : ""}</p>
                                    </div>

                                    <div className="form-outline mb-4">
                                        <input type="password" className="form-control form-control-lg" onChange = {(e)=>setPassword(e.target.value)}/>
                                        <label className="form-label">Password</label> <br />
                                        <p style={{color:"red"}}>{ validation.password? validation.password.message : ""}</p>
                                    </div>

                                    <div className="d-flex justify-content-center">
                                        <button type="button" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body" onClick={registerBusiness}>Register</button>
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
 export default BusinessReg;