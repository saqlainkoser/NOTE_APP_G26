import React from 'react'
function Note() {
  return (
    <>
      <div className="note relative">
        <p className="text-[grey]">Note 1</p>
        <h1 className='text-[#000] text-[20px] w-[80%]'>Website Desige</h1>
        <p className='text-[grey] w-[80%] line-clamp-4'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perferendis iusto porro tenetur animi ad praesentium voluptas perspiciatis sunt deleniti id quas incidunt ut necessitatibus nulla impedit expedita, dolorum quod aliquid!
        </p>
        <div className="noteBottom absolute bottom-5 w-[93%] flex justify-between items-center">
            <p className='text-[grey]'>2/3/2024</p>
            
            <div className="flex items-center gap-1">
                <img  className='w-[30px] h-[30px]'  src={require("../images/delete.jpg")}  alt="" />
                <img  className='w-[30px] h-[30px]'  src={require("../images/edit.png")}  alt="" />
            </div>
        </div>
      </div>
    </>
  )
}

export default Note
