import Banner from '@/components/banner/banner';
import NavBar from '@/components/navbar/navbar';
import React from 'react';

function Home() {
  return (
    <div>
      <NavBar activeIndex={0} onChange={v => console.log} />
      <Banner />
    </div>
  );
}

export default Home;
export const path = '/';
