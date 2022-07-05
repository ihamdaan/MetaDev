import React from 'react'

function SecondLeftMostComponent() {
  return (
    <div className='inter_font flex m-1 w-[230px] h-full bg-black border border-black rounded-2xl py-5 pl-1 pr-3'>
        <div className='w-1/2 h-full relative rotate-180'>
            <div className='text-white text-[20.8px] absolute bottom-0 w-full vertical_text'>
                Andy Warhol 
                <span className='font-bold'> to the power</span>
            </div>
        </div>

        <div className='h-full flex flex-col justify-between'>
            <div className='w-full'>
                <img
                className='w-[96px] h-[96px] object-cover object-center' 
                src="https://collabbi-dashboard-5yzhsg6es-ankit-cg22.vercel.app/images/dream-job.png" 
                alt="poster_img" />
            </div>

            <div className='text-white text-[12px] text-right p-2'>
                I Artsper
            </div>
        </div>
    </div>
  )
}

export default SecondLeftMostComponent