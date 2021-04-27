import classNames from 'classnames';
import React from 'react';

interface NavibarProps {
  activeIndex: number;
  onChange: (activeIndex: number) => void;
}

const navis = ['Trang chủ', 'Sản phẩm', 'Đăng ký hợp tác', 'Giới thiệu'];

function NavBar(props: NavibarProps) {
  return (
    <div className="fixed w-screen bg-black bg-opacity-25 h-20 z-50">
      <div className="mr-auto ml-auto max-w-screen-xl flex flex-row items-center justify-between h-full">
        <img
          referrerPolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng319942caccf9897f411fceab21731ee29eed11f6cc8c2a778beb05ab81580ec0"
        />
        <div className="flex space-x-10 text-base text-white text-opacity-50">
          {navis.map((item, index) => (
            <span
              key={item}
              onClick={() => props.onChange(index)}
              className={classNames({'text-white': props.activeIndex === index})}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
