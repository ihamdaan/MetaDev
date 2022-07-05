import React from 'react'

function LeftMostComponent() {
  return (
    <div className='flex flex-col justify-between m-1 w-[300px] h-[295px] bg-white border border-black rounded-2xl p-2.5'>
        <span className='inter_font font-semibold'>Contemporary artwork that you need to see</span>
        <div className=''>
        <img
            className='w-full h-[128px] object-cover object-center rounded-[45px]' 
            src="https://collabbi-dashboard-5yzhsg6es-ankit-cg22.vercel.app/images/women-in-tech.png" 
            alt="poster_img" 
        />
        </div>
        <div className='m-2 flex justify-between'>
        <span className='inter_font font-semibold'>Shop now</span>
        <span className='inter_font font-semibold'>Share</span>
        </div>
    </div>
  )
}

export default LeftMostComponent