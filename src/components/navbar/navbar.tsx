import {os} from '@/utils';
import classNames from 'classnames';
import React, {useState} from 'react';
import logo from '@/assets/images/logo.png';

interface NavibarProps {
  activeIndex: number;
  onChange: (activeIndex: number) => void;
}

const navis = ['Trang chủ', 'Sản phẩm', 'Đăng ký hợp tác', 'Giới thiệu'];

function NavBar(props: NavibarProps) {
  const [mobileOpened, setMobileOpened] = useState(false);
  const dark = [1];

  // 移动端
  const isDefectIndex =
    window.innerHeight < 710 ||
    // 低分辨率的 pc
    (os.isPc && window.innerHeight < 920);

  if (isDefectIndex) {
    dark.push(3);
  }

  const isDark = dark.includes(props.activeIndex);

  return (
    <div
      className={classNames('fixed w-screen h-20 z-50 sx:h-16', {
        'bg-black': mobileOpened,
      })}
    >
      <div className="mx-auto flex flex-row items-center justify-between h-full sx:hidden  px-9 sx:px-0 max-w-6xl overflow-hidden">
        <div style={{width: 145, height: 58, overflow: 'visible'}}>
          <img
            referrerPolicy="no-referrer"
            src={logo}
            style={{
              boxSizing: 'content-box',
              padding: 0,
              margin: 0,
              borderRight: '145px solid transparent',
              filter: isDark ? 'drop-shadow(145px 0px 0px #48A33C)' : 'drop-shadow(145px 0px 0px white)',
              position: 'relative',
              left: -145,
            }}
          />
        </div>
        <div
          className={classNames('flex space-x-10 text-base text-opacity-50', {
            'text-white': !isDark,
            'text-main': isDark,
          })}
        >
          {navis.map((item, index) => {
            const isActive = props.activeIndex === index;
            return (
              <span
                key={index}
                onClick={() => props.onChange(index)}
                className={classNames({
                  'text-white': isActive && !isDark,
                  'text-main': isActive && isDark,
                  'cursor-pointer': true,
                })}
              >
                {item}
              </span>
            );
          })}
        </div>
      </div>
      <div className="hidden sx:block pl-4 pt-6 float-left" onClick={() => setMobileOpened(!mobileOpened)}>
        <div
          className={classNames('w-6 h-05 my-1 transition duration-300', {
            'bg-main': isDark && !mobileOpened,
            'bg-white': !isDark || mobileOpened,
            transform: mobileOpened,
            'rotate-45': mobileOpened,
            '-translate-x-2': mobileOpened,
            'translate-y-0': mobileOpened,
          })}
        ></div>
        <div
          className={classNames('w-6 h-05 my-1 transition duration-300', {
            'bg-main': isDark && !mobileOpened,
            'bg-white': !isDark || mobileOpened,
            'opacity-0': mobileOpened,
          })}
        ></div>
        <div
          className={classNames('w-6 h-05 my-1 transition duration-300', {
            'bg-main': isDark && !mobileOpened,
            'bg-white': !isDark || mobileOpened,
            transform: mobileOpened,
            '-rotate-45': mobileOpened,
            '-translate-x-2': mobileOpened,
            '-translate-y-3': mobileOpened,
          })}
        ></div>
      </div>
      <div
        className={classNames('fixed left-0 right-0 bottom-0 top-0 mt-16 bg-black transition duration-300 transform', {
          'translate-y-0': mobileOpened,
          'translate-y-full': !mobileOpened,
        })}
      >
        {navis.map((item, index) => (
          <span
            key={index}
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
              'mx-4': true,
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
