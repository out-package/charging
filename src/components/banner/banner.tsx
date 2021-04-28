import React from 'react';
import pcPoster from '../../assets/images/pc-video-cover.png';

export default function Banner() {
  return (
    <div className="h-screen overflow-x-hidden">
      <video
        autoPlay
        loop
        muted
        src="../../assets/videos/pc-video.mp4"
        className=" object-cover absolute w-screen h-screen z-0"
        poster={pcPoster}
      />
      <div className="z-10 relative h-screen items-center justify-center flex">
        <h1 className="text-6xl text-white text-center leading-snug select-none">
          Giữ kết nối với thế giới <br /> cho cuộc sống luôn tràn đầy năng lượng
        </h1>
      </div>
    </div>
  );
}
