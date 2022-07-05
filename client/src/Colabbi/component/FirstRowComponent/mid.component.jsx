import React from 'react';
import LatestFeedComponent from './latestFeed.component';

function MidComponent() {
  return (
    <div className='w-[292px] h-[297px]'>
        <span className='inter_font text-2xl'>LATEST</span>
        <LatestFeedComponent />
        <LatestFeedComponent />
        <LatestFeedComponent />
        <LatestFeedComponent />
    </div>
  )
}

export default MidComponent