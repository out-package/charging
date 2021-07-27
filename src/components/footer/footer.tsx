import classNames from 'classnames';
import React, {HTMLAttributes} from 'react';

function Footer(props: HTMLAttributes<any>) {
  return (
    <div className={classNames('h-72 bg-black bg-opacity-90 sx:h-auto sx:py-6', props.className)}>
      <div className="mx-auto text-white flex justify-between items-center h-full text-base sx:flex-col sx:justify-center sx:text-center max-w-screen-mxl px-9 sx:px-0">
        <div className="sx:pb-8">
          <div className="text-white pb-6 sx:pb-2 font-bold text-xl sx:text-xs">Hợp tác thương mại</div>
          <p className="text-white text-opacity-30 text-lg sx:text-xs">support@moda.cc</p>
        </div>
        <div className="sx:pb-8">
          <div className="text-white pb-6 sx:pb-2 font-bold text-xl sx:text-xs">Hotline tư vấn</div>
          <p className="text-white text-opacity-30 text-lg sx:text-xs">05415154</p>
        </div>
        <div className="sx:pb-8">
          <div className="text-white pb-6 sx:pb-2 font-bold text-xl sx:text-xs">Địa chỉ</div>
          <p className="text-white text-opacity-30 text-lg sx:text-xs">shanghaicaohejing</p>
        </div>
        <div className="flex h-20 py-10 border border-white border-opacity-20 items-center space-x-12 sx:space-x-4 px-10 sx:p-2 sx:h-auto">
          <a href="#" className="w-10 sx:w-5">
            <img src="../../assets/images/facebook.png" alt="" className="w-10 sx:w-5 h-auto" />
          </a>
          <a href="#" className="w-10 sx:w-5">
            <img src="../../assets/images/zalo.png" alt="" className="w-10 sx:w-5 h-auto" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
