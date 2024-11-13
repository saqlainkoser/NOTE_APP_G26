import React from 'react'
import { FaFacebook } from "react-icons/fa";



function Footer() {
  return (
    <>
      <div className="absolute bottom-0  footer h-[120px] w-screen px-[50px] bg-[#f4f4f4] flex items-center justify-between">
        <h3 className='text-2xl'>Keep Note</h3>
        <div className='text-center'>
            <p>Designed By <span className='text-[#E57F57]'>S.K.Ansari Sir</span></p>
            <p>Copy Right 2024 All Rights Reserved</p>
        </div>

        <div className="text-[grey]">
            <p className='font-semibold'>Connect Me / We are Social</p>
            <i className='text-[20px] bg-[#fff]'><FaFacebook/></i>
        </div>
        
      </div>
    </>
  )
}

export default Footer
