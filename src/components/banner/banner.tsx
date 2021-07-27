import {os} from '@/utils';
import classNames from 'classnames';
import React from 'react';

export default function Banner() {
  return (
    <div
      className={classNames(
        'h-screen pt-32  max-w-screen-mxl relative mx-auto sx:flex sx:items-center sx:justify-center sx:flex-col sx:h-auto sx:my-16',
        {
          'sx:pt-6': !os.isSmallScreen,
          'sx:pt-1': os.isSmallScreen,
        },
      )}
    >
      <img
        src="../../assets/images/logo.svg"
        className={classNames('hidden sx:block', {
          'pb-0': os.isSmallScreen,
          'pb-8': !os.isSmallScreen,
        })}
        alt=""
        style={{width: 122}}
      />
      <div className="h-screen sx:h-auto relative z-20">
        <div className="pt-48 sx:pt-0">
          <h2
            style={{fontSize: '4.25rem'}}
            className="sx:hidden font-semibold font-sans sx:text-xl text-normal pb-10 sx:pb-0"
          >
            Sạc dự phòng của bạn
          </h2>
          <h2 className="hidden sx:block font-semibold font-sans sx:text-xl text-normal pb-10 sx:pb-0">
            Sạc dự phòng của bạn
          </h2>
          <p style={{fontSize: 28, color: '#666', width: '40rem'}} className=" sx:hidden">
            Epin đang nỗ lực có mặt ở từng thành phố, <div className="sx:hidden" />
            trở thành nguồn pin di động tiện lợi và an toàn cho mọi người.
          </p>
        </div>
      </div>
      <img
        src="../../assets/images/banner.png"
        className="absolute right-0 bottom-0 z-10 -mr-16 sx:hidden m-auto"
        style={{maxHeight: '83%'}}
        alt=""
      />
      <img
        src="../../assets/images/mobile/banner-mobile.png"
        className={classNames('hidden sx:block', {
          'mt-2': os.isSmallScreen,
          'mt-5': !os.isSmallScreen,
        })}
        alt=""
      />
    </div>
  );
}
