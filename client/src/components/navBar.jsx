import React, {useState, useEffect } from 'react'
import { Link,  useNavigate, useParams} from "react-router-dom";
import axios from 'axios';
import Profile from './Profile';
// import '../styles/theme.css'

function NavBar(props) {
    const { id } = useParams();
    const navigate = useNavigate();
    // const userId = localStorage.getItem('userId')
    const [user, setUser] = useState([])

    const logOut = () => {
        console.log('logging out')
        // axios.post('http://localhost:8000/user/logout', {})
        //     .then(e => {
        //         localStorage.removeItem('userId');
                
        //     })
            navigate('/')
    }

    useEffect(() => {
        axios.get(`http://localhost:8000/users`)
            .then(res => setUser(res.data))
            .catch(err => console.log(err))
    })

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
                            {/* <li class="nav-item dropdown dropdown-hover mx-2">
                                <h2 class="nav-link ps-2 d-flex align-items-center" >Logout</h2> 
                            </ li> */}
                            <li class="nav-item ms-lg-auto my-auto ms-3 ms-lg-0 mt-2 mt-lg-0"> 
                            <Link to={'/create/event'} ><button class="btn btn-sm bg-gradient-primary btn-round mb-0 me-1 mt-2 mt-md-0">New Event</button></Link> 
                            </li>
                           
                            <li class="nav-item dropdown dropdown-hover mx-2">
                        <a class="nav-link ps-2 d-flex justify-content-between cursor-pointer align-items-center" id="dropdownMenuPages1" data-bs-toggle="dropdown" aria-expanded="false">
                            Hello 
                            <img src="https://demos.creative-tim.com/soft-ui-design-system/assets/img/down-arrow-dark.svg" alt="down-arrow" class="arrow ms-1" />
                        </a>
                        <div class="dropdown-menu dropdown-menu-animation dropdown-md p-3 border-radius-lg mt-0 mt-lg-3" aria-labelledby="dropdownMenuPages1">
                            <div class="d-none d-lg-block">
                                {/* <div  class="dropdown-item border-radius-md">
                                {user.role === 'user' ? 
                                (<p>{user.username}</p> ) : (<p>{business.businessName}</p>)}
                                </div> */}
                                <Link to={`/user/${user._id}`} ><a href="javascript:;" class="dropdown-item border-radius-md">
                                    View/Edit Profile
                                </a> </Link> 
                                <a onClick={logOut} href="javascript:;" class="dropdown-item border-radius-md">
                                    Logout
                                </a>
                    
                            </div>

                        </div>
                    </li>
                           
                        </ul>
                    </div>
            </div>
        </nav >
    </div >
  )
}

export default NavBar;
