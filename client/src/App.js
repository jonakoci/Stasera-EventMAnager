
import Welcome from './components/Welcome';
import { BrowserRouter, Route, Routes, useParams  } from "react-router-dom";
import axios from 'axios';
import UserAuth from './Authentication/User/UserAuth';
import BusinessAuth from './Authentication/Business/BusinessAuth';
import NavBar from './components/navBar';
import Footer from './components/Footer';
import {useState, useEffect} from 'react'
import Dashboard from './components/Dashboard';
import CreateEvent from './components/CreateEvent';
import Edit from './components/Edit';
import About from './components/About';
import Contact from './components/Contact';
import UserDetails from './components/UserDetails/UserDetails';
// import io from 'socket.io-client';

function App() {
const [update, setUpdate]=useState(false);
const { id } = useParams();
// const [socket] = useState(() => io(':8000'));
// const [user, setUser] = useState()

// useEffect(() => {
//   axios.get(`http://localhost:8000/user/${id}`)
//     .then(res => { 
//       console.log(res.user)
//       setUser(res.user.firstname) 
//       localStorage.setItem("user", user)})
//     .catch(err => console.log(err + "errrrr"))
// }, [])

  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Welcome />}></Route>
            <Route path='/user/authenticate' element={ <UserAuth /> } />
            <Route path='/business/authenticate' element={ <BusinessAuth /> } />
            <Route path='/dashboard' element={ 
            <>
              <NavBar  />
              <Dashboard update={update} setUpdate={setUpdate} /> 
              <Footer />
            </>
            } />
            <Route path='/create/event' element={ 
            <>
              <NavBar />
              <CreateEvent update={update} setUpdate={setUpdate}  /> 
              <Footer />
            </>
            } />
              <Route path='/event/:id' element={ 
            <>
              <NavBar />
              <Edit update={update} setUpdate={setUpdate} /> 
              <Footer />
            </>
            } />
              <Route path='/about' element={ 
            <>
              <NavBar />
              <About  /> 
              <Footer />
            </>
            } />
              <Route path='/contact' element={ 
            <>
              <NavBar />
              <Contact  /> 
              <Footer />
            </>
            } />
              <Route path='/user/:id' element={ 
            <>
              <NavBar />
              <UserDetails  /> 
              <Footer />
            </>
            } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
