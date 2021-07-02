import About from '@/components/about/about';
import Banner from '@/components/banner/banner';
import Footer from '@/components/footer/footer';
import NavBar from '@/components/navbar/navbar';
import Product from '@/components/product/product';
import ProductBelow from '@/components/product/productBelow';
import Swiper, {SwiperRef} from '@/components/swiper/swiper';
import React, {useRef, useState} from 'react';

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [navBarIndex, setNavBarIndex] = useState(0);
  const [height] = useState(window.innerHeight);
  const ref = useRef<SwiperRef>(null);
  const needSplitScreen = height < 730;

  let showBelowArrow = true
  if (needSplitScreen && currentIndex >= 4) {
    showBelowArrow = false
  }
  
  if (!needSplitScreen && currentIndex >= 3) {
    showBelowArrow = false
  }

  return (
    <div className="h-screen overflow-hidden">
      <NavBar
        activeIndex={navBarIndex}
        onChange={index => {
          ref.current?.getSwiper()?.slideTo(index === 2 ? 3 : index);
        }}
      />
      <Swiper
        ref={ref}
        speed={600}
        onSliceChange={(swiper, index) => {
          const _index = index >= 2 ? index - 1 : index;
          setNavBarIndex(_index);
          setCurrentIndex(index);
        }}
        lastForcesGetSize={!needSplitScreen}
        direction="vertical"
        slideClass="main-slice"
        spaceBetween={0}
        slidesPerView={1}
        loop={false}
        mousewheel={{}}
      >
        <Banner />
        <Product />
        <ProductBelow />
        
        {needSplitScreen && <About className="h-screen flex flex-col items-center justify-center" />}
        {needSplitScreen && <Footer className="sx:h-screen" />}
        {!needSplitScreen && (
          <div id="last-screen">
            <About className="sx:pt-20" />
            <Footer />
          </div>
        )}
      </Swiper>
      {
        showBelowArrow ? <img src="../../assets/images/xiangxiashuangjiantou.png" className="fixed bottom-4 left-0 right-0 mx-auto z-50" alt="" /> : null
      }
    </div>
  );
}

export default Home;
export const path = '/';
