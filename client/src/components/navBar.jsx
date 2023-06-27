import React from 'react'
import { Link } from "react-router-dom";
// import '../styles/theme.css'

function NavBar() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-light bg-white py-3">
                <div class="container">
                    <h1>Stasera</h1>
                    <div class="w-100 pt-3 pb-2 ms-lg-12 " id="navigation">
                        <ul class="navbar-nav w-100 gap-6">
                            <li class="nav-item mx-2">
                                <Link to={'/dashboard'}><h2 class="nav-link ps-2 d-flex align-items-center">Home</h2></Link>  
                            </li>
                            <li class="nav-item dropdown dropdown-hover mx-2">
                                <Link to={'/contact'} > <h2 class="nav-link ps-2 d-flex align-items-center">Contact Us</h2> </Link>
                            </ li>
                            <li class="nav-item dropdown dropdown-hover mx-2">
                                <Link to={'/about'} > <h2 class="nav-link ps-2 d-flex align-items-center">About Us</h2> </Link>
                            </ li>
                            <li class="nav-item dropdown dropdown-hover mx-2">
                                <h2 class="nav-link ps-2 d-flex align-items-center">Logout</h2> 
                            </ li>
                            <li class="nav-item ms-lg-auto my-auto ms-3 ms-lg-0 mt-2 mt-lg-0"> 
                            <Link to={'/create/event'} ><button class="btn btn-sm bg-gradient-primary btn-round mb-0 me-1 mt-2 mt-md-0">New Event</button></Link> 
                            </li>
                        </ul>
                    </div>
            </div>
        </nav >
    </div >
  )
}

export default NavBar;
