import classNames from 'classnames';
import React, {useState} from 'react';

interface NavibarProps {
  activeIndex: number;
  onChange: (activeIndex: number) => void;
}

const navis = ['Trang chủ', 'Sản phẩm', 'Đăng ký hợp tác', 'Giới thiệu'];

function NavBar(props: NavibarProps) {
  const [mobileOpened, setMobileOpened] = useState(false);

  return (
    <div
      className={classNames('fixed w-screen bg-black h-20 z-50 shadow sx:h-16 sx:shadow-none', {
        'bg-opacity-25': !mobileOpened,
      })}
    >
      <div className="mr-auto ml-auto max-w-screen-mxl flex flex-row items-center justify-between h-full sx:hidden">
        <img
          referrerPolicy="no-referrer"
          src="https://lanhu.oss-cn-beijing.aliyuncs.com/SketchPng319942caccf9897f411fceab21731ee29eed11f6cc8c2a778beb05ab81580ec0"
        />
        <div className="flex space-x-10 text-base text-white text-opacity-50">
          {navis.map((item, index) => (
            <span
              key={item}
              onClick={() => props.onChange(index)}
              className={classNames({'text-white': props.activeIndex === index, 'cursor-pointer': true})}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="hidden sx:block ml-3.5 mt-6" onClick={() => setMobileOpened(!mobileOpened)}>
        <div
          className={classNames('w-6 h-05 my-1 transition duration-300 bg-white', {
            transform: mobileOpened,
            'rotate-45': mobileOpened,
            '-translate-x-2': mobileOpened,
            'translate-y-0': mobileOpened,
          })}
        ></div>
        <div
          className={classNames('w-6 h-05 my-1 transition duration-300 bg-white', {
            'opacity-0': mobileOpened,
          })}
        ></div>
        <div
          className={classNames('w-6 h-05 my-1 transition duration-300 bg-white', {
            transform: mobileOpened,
            '-rotate-45': mobileOpened,
            '-translate-x-2': mobileOpened,
            '-translate-y-3': mobileOpened,
          })}
        ></div>
      </div>
      <div
        className={classNames('fixed left-0 right-0 bottom-0 top-16 bg-black transition duration-300 transform', {
          'translate-y-0': mobileOpened,
          'translate-y-full': !mobileOpened,
        })}
      >
        {navis.map((item, index) => (
          <span
            key={item}
            onClick={() => {
              setMobileOpened(false);
              props.onChange(index);
            }}
            className={classNames({
              'text-white': true,
              'cursor-pointer': true,
              'text-opacity-60': true,
              'text-opacity-100': props.activeIndex === index,
              block: true,
              'py-4': true,
              'mx-3.5': true,
              'border-b': true,
              'border-gray-800': true,
              'text-base': true,
            })}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export default NavBar;
