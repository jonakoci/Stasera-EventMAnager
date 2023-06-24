import React from 'react'
import axios from 'axios';
import UserReg from './UserReg';
import UserLog from './UserLog'

function UserAuth() {
  return (
    <div className='text-center m-5'>
      <h1>Welcome to the party!</h1>
      <div className='d-flex justify-content-center gap-5 m-5'>
          < UserReg />
          < UserLog />
      </div>
    </div>
  )
}

export default UserAuth;
