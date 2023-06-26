import './App.css';
import Welcome from './components/Welcome';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserAuth from './Authentication/User/UserAuth';
import BusinessAuth from './Authentication/Business/BusinessAuth';
import NavBar from './components/navBar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={ <> <NavBar /> <Welcome /> <Footer /> </>}></Route>
            <Route path='/user/authenticate' element={ <UserAuth /> } />
            <Route path='/business/authenticate' element={ <BusinessAuth /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
