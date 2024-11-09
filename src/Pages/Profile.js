import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function Profile() {
    return (
        <>
            <Navbar />
            <div className="flex items-center justify-between w-screen h-[300px] px-[50px]">
                <div className="flex items-center gap-[10px]">
                    <div className="circleProfile w-[150px] h-[150px] rounded-[50%] bg-blue-400"></div>
                    <div className='pl-5'>
                        <h3 className='text-2xl'>Shaan</h3>
                        <p className='m-[0px] p-[0px] text-[grey] text-[15px] mt-1'> Joined In 2/3/2024</p>
                    </div>
                    </div>
                    <div className="relative h-[40%]">
                        <div className='flex items-center gap-[10px] text-[grey]'>Total Notes : 3 | Improtant Notes : 1</div>
                        <div className='absolute bottom-0 flex items-center gap-[10px]'>
                            <button className='btnNormal'>Add Pic</button>
                            <button className='btnNormal'>Add Note</button>
                        </div>
                    </div>
            </div>
            <Footer />
        </>
    )
}

export default Profile
