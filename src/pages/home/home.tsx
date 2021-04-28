import About from '@/components/about/about';
import Banner from '@/components/banner/banner';
import Footer from '@/components/footer/footer';
import Form from '@/components/form/form';
import NavBar from '@/components/navbar/navbar';
import Product from '@/components/product/product';
import React, {useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';
import SwiperCore, {Pagination, Mousewheel} from 'swiper/core';

SwiperCore.use([Mousewheel, Pagination]);

function resetBullet() {
  const bullets = document.querySelectorAll(
    '.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet',
  );

  bullets.forEach(el => {
    const classList = Array.from(el.classList);
    const mainIndex = classList.indexOf('bg-main');
    const whiteIndex = classList.indexOf('bg-white');
    const blackIndex = classList.indexOf('bg-black');
    const opacityIndex = classList.indexOf('bg-opacity-70');
    const grayIndex = classList.indexOf('bg-gray-50');
    if (mainIndex != -1) {
      classList.splice(mainIndex, 1);
    }
    if (whiteIndex != -1) {
      classList.splice(whiteIndex, 1);
    }
    if (opacityIndex != -1) {
      classList.splice(opacityIndex, 1);
    }
    if (blackIndex != -1) {
      classList.splice(blackIndex, 1);
    }
    if (grayIndex != -1) {
      classList.splice(blackIndex, 1);
    }
    el.className = classList.join(' ');
  });
}

function changeBullet(currentIndex: number) {
  const bullets = document.querySelectorAll(
    '.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet',
  );
  const activeBullet = document.querySelector(
    '.swiper-container-vertical>.swiper-pagination-bullets .swiper-pagination-bullet-active',
  );

  if (currentIndex % 2 === 0) {
    // 深色模式
    bullets.forEach(bullet => {
      bullet.className += ' bg-white bg-opacity-70';
    });
  } else {
    bullets.forEach(bullet => {
      bullet.className += ' bg-black bg-opacity-70';
    });
    activeBullet!.className += ' bg-main';
  }
}

function Home() {
  const ref = useRef<SwiperCore | null>(null);
  const [navBarIndex, setNavBarIndex] = useState(0);

  return (
    <div className="h-screen overflow-y-hidden overflow-x-hidden">
      <NavBar
        activeIndex={navBarIndex}
        onChange={index => {
          setNavBarIndex(index);
          ref.current?.slideTo(index);
        }}
      />
      <Swiper
        speed={300}
        mousewheel={{forceToAxis: true}}
        direction="vertical"
        spaceBetween={0}
        height={window.innerHeight}
        simulateTouch={false}
        slidesPerView={1}
        pagination={{
          clickable: true,
          bulletActiveClass: 'swiper-pagination-bullet-active w-5 rounded-lg shadow bg-white',
          bulletClass: 'swiper-pagination-bullet bg-opacity-70 bg-gray-50',
        }}
        onPaginationRender={(swiper, el) => {
          el.className = Array.from(el.classList)
            .concat('fixed', '!px-4', 'flex-col', 'items-center', 'flex', 'justify-center')
            .join(' ');
        }}
        onSlideChange={swiper => {
          resetBullet();
          changeBullet(swiper.activeIndex);
        }}
        onInit={swiper => {
          ref.current = swiper;
        }}
        onUpdate={(swiper: any) => {
          const lastscreen = document.getElementById('last-screen');
          const lastGrid = window.innerHeight * 3 - (window.innerHeight - (lastscreen?.offsetHeight ?? 0));
          swiper.snapGrid.splice(swiper.snapGrid.length - 1, 1, lastGrid);
        }}
      >
        <SwiperSlide>
          <Banner />
        </SwiperSlide>
        <SwiperSlide>
          <Product />
        </SwiperSlide>
        <SwiperSlide>
          <Form />
        </SwiperSlide>
        <SwiperSlide>
          <div id="last-screen">
            <About />
            <Footer />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Home;
export const path = '/';
