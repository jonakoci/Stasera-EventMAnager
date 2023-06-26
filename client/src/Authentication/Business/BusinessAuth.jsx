import React from 'react'
// import axios from 'axios';
import confettiImage from './confetti.jpeg'
import BusinessLog from './BusinessLog';
import BusinessReg from './BusinessReg';

function BusinessAuth() {
  return (
    <div style={{backgroundImage:`url(${confettiImage})`, backgroundSize:"cover"}}>
      <h1 className='text-center m-5'>Welcome to the party!</h1>
      <div className='d-flex justify-content-center gap-5 m-5'>
        < BusinessReg />
        < BusinessLog /> 
      </div>
    </div>
  )
}

export default BusinessAuth;