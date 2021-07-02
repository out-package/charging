import MobileNavbar from '@/components/mobile-navbar/mobile-navbar';
import classNames from 'classnames';
import React from 'react';

function Scan() {
  const fixedBottom = window.innerHeight < 710;

  return (
    <div style={{background: '#E9E9E9'}} className="h-screen overflow-y-auto flex flex-col">
      <MobileNavbar />
      {/* <div className="flex text-xss text-black text-opacity-50 items-center justify-between pt-4 pb-2 flex-shrink-0 font-light">
        <span className="flex-1 text-center px-2">Sạc pin miễn phí 10 phút</span>
        <div className="w-px h-4 bg-black bg-opacity-10"></div>
        <span className="flex-1 text-center px-2">Mạng lưới cửa hàng thuê trả thuận tiện</span>
      </div>
      <img src="../../assets/images/picture@2x.png" alt="" className="w-screen flex-shrink-0" />
      <div className="bg-white rounded-t-2xl py-5 px-4 flex-1 overflow-hidden" style={{minHeight: 462}}>
        <div className="text-black text-base pb-1">Nguyên tắc tính phí</div>
        <div className=" text-black opacity-80 leading-5 pb-4">
          Miễn phí 10 phút đầu tiên, 5000đ/mỗi 30 phút tiếp theo, mỗi 24h cao nhất 100.000đ.
        </div>
        <div className="text-black text-base pb-1">Nguyên tắc đặt cọc</div>
        <div className=" text-black opacity-80 leading-5 pb-4">
          Đặt cọc 300.000đ, phí thuê pin khấu trừ vào tiền cọc, số dư còn lại sẽ được hoàn cho khách hàng sau khi trả
          pin về trạm.
        </div>
        <div
          className={classNames({
            fixed: fixedBottom,
            'inset-x-0': fixedBottom,
            'bottom-0': fixedBottom,
            'bg-white': fixedBottom,
            'px-4': fixedBottom,
            'pb-5': fixedBottom,
            'border-t': fixedBottom,
            'border-gray-300': fixedBottom,
          })}
        >
          <div className="flex items-center justify-between pt-4">
            <span className="text-black text-base">Đầu nối tương thích</span>
            <div className="flex space-x-4">
              <img className="w-5 h-5 object-contain" src="../../assets/images/iphone-head@2x.png" />
              <img className="w-5 h-5 object-contain" src="../../assets/images/typec-head@2x.png" />
              <img className="w-5 h-5 object-contain" src="../../assets/images/android-head@2x.png" />
            </div>
          </div>
          <div className="flex space-x-2 my-4">
            <div className="flex-1 flex h-12 items-center justify-center space-x-4 bg-main text-white">
              <img className="w-8" src="../../assets/images/zalopay@2x.png" />
              <span className="info3">ZaloPay</span>
            </div>
            <div className="flex-1 flex h-12 items-center justify-center space-x-4 border-main border text-main">
              <img className="w-8" src="../../assets/images/momopay@2x.png" />
              <span className="word8">MomoPay</span>
            </div>
          </div>
          <div className="text-xs text-center font-light">
            <span className="text-black text-opacity-50">Yêu cầu thuê pin đồng nghĩa với việc bạn đồng ý với</span>
            <span className="text-main">“Điều khoản phục vụ sản phẩm”</span>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default Scan;
export const path = '/scan';
