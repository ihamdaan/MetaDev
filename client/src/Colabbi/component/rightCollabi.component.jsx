import React from 'react';
import FirstRowMain from './FirstRowComponent/firstRowMain.component';
import SecondRowMain from './SecondRowComponent/secondRowMain.component';

function RightCollabiComponent() {
  return (
    <div className='px-14 py-8 bg-gray-50 w-full h-screen'>
        <div className='bg-white'>
          <FirstRowMain />
          <SecondRowMain />
        </div>
    </div>
  )
}

export default RightCollabiComponent