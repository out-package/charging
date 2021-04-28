import React from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import SwiperCore, {Autoplay} from 'swiper/core';

SwiperCore.use([Autoplay]);

function Product() {
  return (
    <div className="h-screen box-border py-24 overflow-y-auto">
      <div className="max-w-screen-mxl mx-auto bg-black bg-opacity-02 h-full box-border px-28 flex items-center justify-center relative">
        <Swiper
          direction="horizontal"
          simulateTouch={false}
          autoplay={{
            delay: 5000,
          }}
          loop
          pagination={{
            el: '.child-swiper-pagination',
            type: 'bullets',
            bulletActiveClass: 'swiper-pagination-bullet-active w-4 rounded-lg bg-main',
            clickable: true,
          }}
        >
          <SwiperSlide>
            <div className="flex flex-row justify-between items-center h-full">
              <div className="pr-20">
                <h2 className="text-5xl text-main">Trạm sạc 8 ngăn</h2>
                <p className="text-2xl text-black text-opacity-30 pt-3 pb-14 border-black border-dotted border-opacity-70 border-b-2">
                  Thiết kế nhỏ gọn, thích hợp cho cả không gian vừa và nhỏ
                </p>

                <div className="flex flex-row flex-wrap py-14 border-b-2 border-black border-solid border-opacity-10">
                  <dl className="w-1/3 pb-16">
                    <dt className="text-lg text-black pb-4">
                      <i className="mr-4 inline-block h-4 w-1 bg-main align-middle rounded"></i>
                      Trọng lượng
                    </dt>
                    <dd className="pl-4 text-3xl">4.7kg </dd>
                  </dl>
                  <dl className="w-2/3 pb-16">
                    <dt className="text-lg text-black pb-4">
                      <i className="mr-4 inline-block h-4 w-1 bg-main align-middle rounded"></i>Kích thước
                    </dt>
                    <dd className="pl-4 text-3xl">260*180*222mm</dd>
                  </dl>
                  <dl className="w-1/3">
                    <dt className="text-lg text-black pb-4">
                      <i className="mr-4 inline-block h-4 w-1 bg-main align-middle rounded"></i>Số lượng pin sạc
                    </dt>
                    <dd className="pl-4 text-3xl">8</dd>
                  </dl>
                  <dl className="w-2/3">
                    <dt className="text-lg text-black pb-4">
                      <i className="mr-4 inline-block h-4 w-1 bg-main align-middle rounded"></i>Nguồn điện đầu vào
                    </dt>
                    <dd className="pl-4 text-3xl">DC12V5A</dd>
                  </dl>
                </div>
                <div className="pt-14 text-2xl">
                  Các chứng nhận kiểm nghiệm
                  <div className="flex space-x-8 pt-6">
                    <img src="../../assets/images/ce.png" className="w-14 h-auto" alt="" />
                    <img src="../../assets/images/fcc.png" className="w-14 h-auto" alt="" />
                    <img src="../../assets/images/cbpng.png" className="w-14 h-auto" alt="" />
                    <img src="../../assets/images/rohs.png" className="w-14 h-auto" alt="" />
                  </div>
                </div>
              </div>
              <div>
                <img className="pic1" referrerPolicy="no-referrer" src="../../assets/images/product1.png" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-row justify-between items-center h-full cursor-pointer">
              <div className="pr-20">
                <h2 className="text-5xl text-main">Trạm sạc 8 ngăn</h2>
                <p className="text-2xl text-black text-opacity-30 pt-3 pb-14 border-black border-dotted border-opacity-70 border-b-2">
                  Thiết kế nhỏ gọn, thích hợp cho cả không gian vừa và nhỏ
                </p>

                <div className="flex flex-row flex-wrap py-14 border-b-2 border-black border-solid border-opacity-10">
                  <dl className="w-1/3 pb-16">
                    <dt className="text-lg text-black pb-4">
                      <i className="mr-4 inline-block h-4 w-1 bg-main align-middle rounded"></i>
                      Trọng lượng
                    </dt>
                    <dd className="pl-4 text-3xl">142g </dd>
                  </dl>
                  <dl className="w-2/3 pb-16">
                    <dt className="text-lg text-black pb-4">
                      <i className="mr-4 inline-block h-4 w-1 bg-main align-middle rounded"></i>Kích thước
                    </dt>
                    <dd className="pl-4 text-3xl">132*66*15mm</dd>
                  </dl>
                  <dl className="w-1/3">
                    <dt className="text-lg text-black pb-4">
                      <i className="mr-4 inline-block h-4 w-1 bg-main align-middle rounded"></i>Môi trường hoạt động
                    </dt>
                    <dd className="pl-4 text-3xl">-25℃ ~ 55℃ </dd>
                  </dl>
                  <dl className="w-2/3">
                    <dt className="text-lg text-black pb-4">
                      <i className="mr-4 inline-block h-4 w-1 bg-main align-middle rounded"></i>Tuổi thọ sử dụng
                    </dt>
                    <dd className="pl-4 text-3xl">≥300</dd>
                  </dl>
                </div>
                <div className="pt-14 text-2xl">
                  Các chứng nhận kiểm nghiệm
                  <div className="flex space-x-8 pt-6">
                    <img src="../../assets/images/ce.png" className="w-14 h-auto" alt="" />
                    <img src="../../assets/images/rohs.png" className="w-14 h-auto" alt="" />
                    <img src="../../assets/images/msds.png" className="w-14 h-auto" alt="" />
                  </div>
                </div>
              </div>
              <div>
                <img className="pic1" referrerPolicy="no-referrer" src="../../assets/images/product2.png" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="child-swiper-pagination swiper-pagination w-full bottom-10 flex space-x-4 justify-center"></div>
      </div>
    </div>
  );
}

export default Product;
