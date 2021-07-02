import React from 'react';
import pcPoster from '../../assets/images/pc-video-cover.png';
import mobilePoster from '../../assets/images/mobile-video-cover.png';
import {isWeixin} from '@/utils/index';

export default function Banner() {
  return (
    <div className="h-screen mt-32 max-w-6xl relative mx-auto">
      <div className="h-screen relative z-20">
        <div className="pt-40">
          <h2 className="text-6xl font-bold font-sans">Sạc dự phòng của bạn</h2>
          <p className="max-w-md">Epin đang nỗ lực có mặt ở từng thành phố, trở thành nguồn pin di động tiện lợi và an toàn cho mọi người.</p>
        </div>
      </div>
      <img src="../../assets/images/banner.png" className="absolute right-0 top-0 bottom-0 my-auto z-10 -mr-40" alt="" />
    </div>
  );
}
