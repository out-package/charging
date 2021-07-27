import Actionsheet from '@/components/actionsheet';
import MobileNavbar from '@/components/mobile-navbar/mobile-navbar';
import {os} from '@/utils';
import classNames from 'classnames';
import React, {useState} from 'react';

function Scan() {
  const [visibel, setVisibel] = useState(false);

  return (
    <div style={{background: '#E9E9E9'}} className="h-screen overflow-hidden flex flex-col">
      <Actionsheet visible={visibel} menus={['ZaloPay', 'MomoPay']} onRequestClose={() => setVisibel(false)} />
      <MobileNavbar />
      <div className="flex flex-col flex-1 overflow-hidden">
        <div
          className={classNames('flex items-center justify-center', {
            'flex-1': !os.isSmallScreen,
          })}
          style={{height: os.isSmallScreen ? window.innerHeight - 328 : undefined}}
        >
          <img
            src="../../assets/images/scan/picture.png"
            alt=""
            className="block"
            style={{width: 'auto', height: '80%', objectFit: 'contain'}}
          />
        </div>
        <div className="bg-white rounded-t-2xl py-5 overflow-hidden">
          <div className="px-4 ">
            <div
              className={classNames(' text-black opacity-80 leading-5 flex', {
                'pb-4': !os.isSmallScreen,
                'pb-2': !os.isSmallScreen,
              })}
            >
              <i
                className="mr-2 inline-block mt-1.5"
                style={{
                  width: 3,
                  height: 7,
                  background: '#48A33C',
                  borderRadius: 3,
                }}
              ></i>
              <span
                className={classNames('flex-1 overflow-hidden', {
                  'text-sm': !os.isSmallScreen,
                  'text-xs': os.isSmallScreen,
                })}
              >
                Miễn phí 10 phút sạc đầu tiên, 5K cho 30 phút tiếp theo, mỗi 24h cao nhất 80K
              </span>
            </div>
            <div className=" text-black opacity-80 leading-5 pb-4 flex">
              <i
                className="mr-2 inline-block mt-1.5"
                style={{
                  width: 3,
                  height: 7,
                  background: '#48A33C',
                  borderRadius: 3,
                }}
              ></i>
              <span className="text-sm flex-1 overflow-hidden">
                Đặt cọc 240K khi nhận pin, phí thuê pin khấu trừ vào tiền cọc, số dư sẽ được hoàn cho khách hàng sau khi
                trả pin về trạm
              </span>
            </div>
            <div>
              <div className="flex items-center justify-between pt-4">
                <span className="text-black text-base font-bold">Các loại cáp sạc</span>
                <div className="flex space-x-4">
                  <img className="w-5 h-5 object-contain" src="../../assets/images/scan/iphone.svg" />
                  <img className="w-5 h-5 object-contain" src="../../assets/images/scan/tyc.svg" />
                  <img className="w-5 h-5 object-contain" src="../../assets/images/scan/android.svg" />
                </div>
              </div>
              <div className="flex space-x-2 my-4">
                <div
                  className="flex-1 flex h-12 items-center justify-center space-x-4 bg-main text-white rounded-full"
                  onClick={() => setVisibel(true)}
                >
                  <span className="info3">Thuê sạc ngay</span>
                </div>
              </div>
            </div>
          </div>
          <div className="text-xs text-center font-light px-2">
            <span
              className="text-black text-opacity-50 transform scale-70 inline-block origin-top-left w-full text-center"
              style={{width: '165%'}}
            >
              Yêu cầu thuê pin có nghĩa là bạn đồng ý với{' '}
              <span className="text-main">“Điều khoản sử dụng dịch vụ” </span> của chúng tôi.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Scan;
export const path = '/scan';
