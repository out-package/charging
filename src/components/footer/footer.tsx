import React from 'react';

function Footer() {
  return (
    <div className="h-72 bg-black bg-opacity-90">
      <div className="max-w-screen-xl mx-auto text-white flex justify-between items-center h-full text-base">
        <div>
          <div className="text-white pb-7">Hợp tác thương mại</div>
          <p className="text-white text-opacity-30">support@moda.cc</p>
        </div>
        <div>
          <div className="text-white pb-7">Hotline tư vấn</div>
          <p className="text-white text-opacity-30">05415154</p>
        </div>
        <div>
          <div className="text-white pb-7">Địa chỉ</div>
          <p className="text-white text-opacity-30">shanghaicaohejing</p>
        </div>
        <div className="flex h-20 py-10 border border-white border-opacity-20 items-center space-x-12 px-10">
          <a href="#" className="w-10">
            <img src="../../assets/images/facebook.png" alt="" className="w-10 h-auto" />
          </a>
          <a href="#" className="w-10">
            <img src="../../assets/images/zalo.png" alt="" className="w-10 h-auto" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
