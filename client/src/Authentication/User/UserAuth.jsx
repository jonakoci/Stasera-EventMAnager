import React from 'react'
import axios from 'axios';
import UserReg from './UserReg';
import UserLog from './UserLog'
import confettiImage from './confetti.jpeg'

function UserAuth() {
  return (
    <div style={{backgroundImage:`url(${confettiImage})`, backgroundSize:"cover"}}>
      <h1 className='text-center m-5'>Welcome to the party!</h1>
      <div className='d-flex justify-content-center gap-5 m-5'>
          < UserReg />
          < UserLog />
      </div>
    </div>
  )
}

export default UserAuth;
