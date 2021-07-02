import React from 'react';
import pcPoster from '../../assets/images/pc-video-cover.png';
import mobilePoster from '../../assets/images/mobile-video-cover.png';
export default function Banner() {
  return (
    <div className="h-screen mt-32 max-w-6xl relative mx-auto sx:flex sx:items-center sx:justify-center sx:flex-col sx:mt-32 sx:h-auto">
      <img src="../../assets/images/mobile/mobileLogo.png" className="hidden sx:block pb-8" alt="" />
      <div className="h-screen sx:h-auto relative z-20">
        <div className="pt-40 sx:pt-0">
          <h2 className="text-6xl font-bold font-sans sx:text-xl">Sạc dự phòng của bạn</h2>
          <p style={{ color: '#666' }} className=" max-w-xl text-3xl sx:hidden">Epin đang nỗ lực có mặt ở từng thành phố, trở thành nguồn pin di động tiện lợi và an toàn cho mọi người.</p>
        </div>
      </div>
      <img src="../../assets/images/banner.png" className="absolute right-0 top-0 bottom-0 z-10 -mr-40 sx:hidden" alt="" />
      <img src="../../assets/images/mobile/banner-mobile.png" className="hidden sx:block" alt="" />
    </div>
  );
}
