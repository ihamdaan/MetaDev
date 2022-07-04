import React from 'react';
import NavbarComponent from './components/navbar.component';
import SidebarComponent from './components/sidebar.component';
import LeftComponent from './components/left.component';
import RightComponent from './components/right.component';

function MainPage() {
  return (
    <div className='bg-gray-50'>
      <NavbarComponent />
      <div className='flex'>
        <SidebarComponent />
        <LeftComponent />
        <RightComponent />
      </div>
    </div>
  )
}

export default MainPage;