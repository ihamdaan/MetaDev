import React from 'react'

function SecondMid() {
  return (
    <div className='flex flex-col justify-between m-1 w-[240px] h-full bg-white border border-black rounded-lg p-2.5'>
        <div className='flex gap-3'>
            <span className='inter_font font-semibold w-full text-[15px]'>Art exhibitions from around the world</span>
            <div className='w-1/2'>
                <img
                    className='w-[80px] h-[80px] object-cover object-center' 
                    src="https://collabbi-dashboard-5yzhsg6es-ankit-cg22.vercel.app/images/dream-job.png" 
                    alt="poster_img" 
                />
            </div>
        </div>

        <div className='text-[12px] inter_font text-gray-700'>
            Even if I had the means , I would still shoot on the iphone .Malick Kobe is one the rising talents.
        </div>

        <span className='inter_font font-semibold text-right'>Shop now</span>
    </div>
  )
}

export default SecondMid