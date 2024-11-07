import React from 'react'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <>
      <div className="container bg-[#d4d4d4] flex justify-center items-center fle-col min-h-[100vh]">
        <form action="" className="form">
            <h3 className='text-[26px] text-center mt-3 mb-5'>Sign Up</h3>
            <div className="inputBox">
                <input type="text" placeholder='Username' id='username' name='username'/>
            </div>
            <div className="inputBox">
                <input type="text" placeholder='Name' id='name' name='name'/>
            </div>
            <div className="inputBox">
                <input type="email" placeholder='Email' id='email' name='email'/>
            </div>
            <div className="inputBox">
                <input type="passwprd" placeholder='Password' id='password' name='password'/>
            </div>

            <button className='btnBig mt-3 mb-3'>Sign Up</button>
            <p>Already Have An Account <Link className='text-[#F57E57]'>Log In</Link>  </p>

        </form>
      </div>
    </>
  )
}

export default Signup
