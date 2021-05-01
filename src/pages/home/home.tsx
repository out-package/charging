import About from '@/components/about/about';
import Banner from '@/components/banner/banner';
import Footer from '@/components/footer/footer';
import Form from '@/components/form/form';
import NavBar from '@/components/navbar/navbar';
import Product from '@/components/product/product';
import Swiper, {SwiperRef} from '@/components/swiper/swiper';
import {addClass, removeClass} from '@/libs/tiny-swiper/core/render/dom';
import React, {useCallback, useEffect, useRef, useState} from 'react';

function Home() {
  const [navBarIndex, setNavBarIndex] = useState(0);
  const [height, setHeight] = useState(window.innerHeight);
  const ref = useRef<SwiperRef>(null);

  const needSplitScreen = height < 730;

  const darkActiveClass = 'bg-white';
  const lightActiveClass = 'bg-main';

  const darkClass = 'bg-white';
  const lightClass = 'bg-black';

  return (
    <div className="h-screen overflow-hidden">
      <NavBar
        activeIndex={navBarIndex}
        onChange={index => {
          setNavBarIndex(index);
          ref.current?.getSwiper()?.slideTo(index);
        }}
      />
      <Swiper
        ref={ref}
        speed={600}
        onSliceChange={(swiper, index) => {
          setNavBarIndex(index);
        }}
        lastForcesGetSize={!needSplitScreen}
        direction="vertical"
        slideClass="main-slice"
        spaceBetween={0}
        slidesPerView={1}
        loop={false}
        mousewheel={{}}
        pagination={{
          el: '.main-swiper-pagination',
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active w-5 rounded-lg shadow bg-white',
          bulletClass: 'swiper-pagination-bullet bg-opacity-70 bg-gray-50 bg-white',
        }}
        onPaginationChange={(cur, prev, isActive, currentIndex) => {
          const darkIndex = [0, 2];
          if (needSplitScreen) {
            darkIndex.push(4);
          }

          if (darkIndex.includes(currentIndex)) {
            removeClass(prev, isActive ? lightActiveClass : lightClass);
            addClass(cur, isActive ? darkActiveClass : darkClass);
          } else {
            removeClass(prev, isActive ? darkActiveClass : darkClass);
            addClass(cur, isActive ? lightActiveClass : lightClass);
          }
        }}
      >
        <Banner />
        <Product />
        <Form />
        {needSplitScreen && <About className="h-screen flex flex-col items-center justify-center" />}
        {needSplitScreen && <Footer className="sx:h-screen" />}
        {!needSplitScreen && (
          <div id="last-screen">
            <About className="sx:pt-20" />
            <Footer />
          </div>
        )}
      </Swiper>
      <div className="main-swiper-pagination fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col justify-center items-center space-y-2 sx:right-1 sx:px-0 z-10"></div>
    </div>
  );
}

export default Home;
export const path = '/';
//     right: 10px;
// top: 50%;
// transform: translate3d(0px,-50%,0);
