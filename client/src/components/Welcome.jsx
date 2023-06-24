import React from 'react'
import "../styles/theme.css"
import backgroundImage from '../images/welcome.jpeg'
import { useNavigate, Link } from "react-router-dom";



function Welcome() {
  // const navigate = useNavigate();

  return (
    <div>
      <div class="page-header min-vh-100">
            <div className="oblique position-absolute top-0 h-100 d-md-block d-none">
                <div className="oblique-image bg-cover position-absolute fixed-top ms-auto h-100 z-index-0 ms-n6" style={{backgroundImage:`url(${backgroundImage})`}}></div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-7 d-flex justify-content-center flex-column">
                        <h1 className="text-gradient text-primary font-monospace" >What have we planned Stasera?</h1>
                        <h1 className="mb-4">Party with US!</h1>
                        <p className="lead pe-5 me-5 font-italic">"Explore the vibrant world of club events, book your coveted table, and let the night unfold effortlessly."</p>
                        <div className="buttons">
                            <Link to={'/user/authenticate'}> <button type="button" className="btn bg-gradient-primary m-4" >Party Animal</button> </Link>
                            <button type="button" className="btn m-4 btn-warning" >Business</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Welcome
