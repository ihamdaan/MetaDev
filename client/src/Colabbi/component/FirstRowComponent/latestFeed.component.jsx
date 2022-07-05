import React from 'react'

function LatestFeedComponent() {
  return (
    <div className='flex gap-2 w-full my-2 items-center inter_font'>
        <div className='w-1/3'>
            <img 
                className='w-[58px] h-[47px] object-cover object-center rounded-t-md'
                src="https://collabbi-dashboard-5yzhsg6es-ankit-cg22.vercel.app/images/career-accelerator.png" 
                alt="feed_img" 
            />
        </div>

        <div className='w-full'>
            <div className='font-semibold'>Aka Smallditch</div>
            <div className='text-[10.4px] text-gray-500'>I love sharing what I have learned , and passing the experiences.</div>
        </div>
    </div>
  )
}

export default LatestFeedComponent