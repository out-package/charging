import NavBar from '@/components/navbar/navbar';
// import {runFunction} from '@/utils/index';
import React from 'react';

function Home() {
  return (
    <div>
      <NavBar activeIndex={0} onChange={v => console.log} />
    </div>
  );
}

export default Home;
export const path = '/';
