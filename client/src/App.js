
import Welcome from './components/Welcome';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserAuth from './Authentication/User/UserAuth';
import BusinessAuth from './Authentication/Business/BusinessAuth';
import NavBar from './components/navBar';
import Footer from './components/Footer';
import {useState} from 'react'
import Dashboard from './components/Dashboard';
import CreateEvent from './components/CreateEvent';

function App() {
const [update, setUpdate]=useState([]);


  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <Welcome />}></Route>
            <Route path='/user/authenticate' element={ <UserAuth /> } />
            <Route path='/business/authenticate' element={ <BusinessAuth /> } />
            <Route path='/dashboard' element={ 
            <>
              <NavBar />
              <Dashboard update={update} setUpdate={setUpdate} /> 
              <Footer />
            </>
            } />
            <Route path='/create/event' element={ 
            <>
              <NavBar />
              <CreateEvent update={update} setUpdate={setUpdate} /> 
              <Footer />
            </>
            } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
