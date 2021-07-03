import Actionsheet from '@/components/actionsheet';
import MobileNavbar from '@/components/mobile-navbar/mobile-navbar';
import classNames from 'classnames';
import React, {useState} from 'react';

function Map() {
  const [visibel, setVisibel] = useState(false);

  const fixedBottom = window.innerHeight < 710;

  return (
    <div style={{background: '#E9E9E9'}} className="h-screen overflow-y-auto flex flex-col">
      <Actionsheet visible={visibel} menus={['ZaloPay', 'MomoPay']} onRequestClose={() => setVisibel(false)} />
      <MobileNavbar />
      <div className="flex flex-col flex-1">
        <div className="flex-1 flex items-center justify-center">
          <img src="../../assets/images/cx.png" alt="" className="w-2/3" />
        </div>
        <div className="bg-white rounded-t-2xl py-5 px-4 overflow-hidden">
          <div className=" text-black opacity-80 leading-5 pb-4 flex">
            <i className="mr-4 inline-block h-4 sx:w-0.5 sx:h-2 w-1 bg-main align-middle rounded"></i>
            <span>Miễn phí 10 phút sạc đầu tiên, 5K cho 30 phút tiếp theo, mỗi 24h cao nhất 80K</span>
          </div>
          <div className=" text-black opacity-80 leading-5 pb-4 flex">
            <i className="mr-4 inline-block h-4 sx:w-0.5 sx:h-2 w-1 bg-main align-middle rounded"></i>
            <span>
              Đặt cọc 240K khi nhận pin, phí thuê pin khấu trừ vào tiền cọc, số dư sẽ được hoàn cho khách hàng sau khi
              trả pin về trạm
            </span>
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
              <span className="text-black text-base font-bold">Các loại cáp sạc</span>
              <div className="flex space-x-4">
                <img className="w-5 h-5 object-contain" src="../../assets/images/scan/iphone.png" />
                <img className="w-5 h-5 object-contain" src="../../assets/images/scan/typec.png" />
                <img className="w-5 h-5 object-contain" src="../../assets/images/scan/android.png" />
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
            <div className="text-xs text-center font-light">
              <span
                className="text-black text-opacity-50 transform scale-70 inline-block origin-top-left w-full"
                style={{width: '145%'}}
              >
                Yêu cầu thuê pin có nghĩa là bạn đồng ý với{' '}
                <span className="text-main">“Điều khoản sử dụng dịch vụ” </span> của chúng tôi.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Map;
export const path = '/map';
