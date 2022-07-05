import React from 'react';
import SecondLeftMostComponent from './secondLeftMost.component';
import SecondMid from './secondMid.component';
import SecondRightComponent from './secondRightMost.component';

function SecondRowMain() {
  return (
    <div className='pt-[20px] rounded-md flex justify-between w-full h-[250px]'>
         <SecondLeftMostComponent />
         <SecondMid />
         <SecondRightComponent />
    </div>
  )
}

export default SecondRowMain