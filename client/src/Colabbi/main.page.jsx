import React from 'react';
import CollabiSidebarComponent from './component/sidebarCollabi.component';
import RightCollabiComponent from './component/rightCollabi.component';

function CollabiMainPage() {
  return (
    <div className='flex'>
        <CollabiSidebarComponent />
        <RightCollabiComponent />
    </div>
  )
}

export default CollabiMainPage