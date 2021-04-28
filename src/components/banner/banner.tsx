import classNames from 'classnames';
import React from 'react';
import pcPoster from '../../assets/images/pc-video-cover.png';
import mobilePoster from '../../assets/images/mobile-video-cover.png';

export default function Banner() {
  return (
    <div className="h-screen overflow-x-hidden">
      <video
        autoPlay
        loop
        muted
        src="../../assets/videos/pc-video.mp4"
        className="object-cover absolute w-screen h-screen z-0 block sx:hidden"
        poster={pcPoster}
      />
      <video
        autoPlay
        loop
        muted
        src="../../assets/videos/mobile-video.mp4"
        className="object-cover absolute w-screen h-screen z-0 hidden sx:block"
        poster={mobilePoster}
      />
      <div className="z-10 relative h-screen items-center justify-center flex sx:flex-col">
        <img src="../../assets/images/mobile-logo.png" alt="" className="mb-20 hidden sx:block" />
        <h1 className="text-6xl text-white text-center leading-snug select-none sx:text-xl sx:px-8 sx:leading-8">
          Giữ kết nối với thế giới <br /> cho cuộc sống luôn tràn đầy năng lượng
        </h1>
      </div>
    </div>
  );
}
