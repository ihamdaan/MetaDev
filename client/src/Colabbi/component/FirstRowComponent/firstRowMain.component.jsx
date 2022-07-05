import React from 'react'
import LeftMostComponent from './leftmost.component';
import MidComponent from './mid.component';

function FirstRowMain() {
  return (
    <div className='bg-white rounded-md flex justify-between'>
        <LeftMostComponent />
        <MidComponent />
        <div className='m-1'>
        <img 
            className='w-[280px] h-[292px] object-cover object-center rounded-3xl'
            src="https://collabbi-dashboard-5yzhsg6es-ankit-cg22.vercel.app/images/women-in-tech.png" 
            alt="poster_img" 
        />
        </div>
    </div>
  )
}

export default FirstRowMain