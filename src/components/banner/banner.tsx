import React from 'react';

export default function Banner() {
  return (
    <div className="w-screen h-screen relative z-0">
      <video
        autoPlay
        loop
        muted
        src="https://cdn.enmonster.com/enmonster/web/earth.mp4"
        className=" object-cover absolute w-screen h-screen z-0"
      />
      <div className="z-10 relative w-screen h-screen items-center justify-center flex">
        <h1 className="text-6xl text-white text-center">
          <div id="emnTitle1">
            Giữ kết nối với thế giới <br /> cho cuộc sống luôn tràn đầy năng lượng
          </div>
        </h1>
      </div>
    </div>
  );
}
