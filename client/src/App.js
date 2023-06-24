import './App.css';
import Welcome from './components/Welcome';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserAuth from './Authentication/User/UserAuth';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Welcome />}></Route>
            <Route path='/user/authenticate' element={ <UserAuth /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
