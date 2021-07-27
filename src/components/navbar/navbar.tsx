import {os} from '@/utils';
import classNames from 'classnames';
import React, {useState} from 'react';
import logo from '@/assets/images/logo.svg';

interface NavibarProps {
  activeIndex: number;
  onChange: (activeIndex: number) => void;
}

const navis = ['Trang chủ', 'Sản phẩm', 'Hợp tác'];

function NavBar(props: NavibarProps) {
  const [mobileOpened, setMobileOpened] = useState(false);
  const dark = [];

  // 移动端
  const isDefectIndex =
    window.innerHeight < 710 ||
    // 低分辨率的 pc
    (os.isPc && window.innerHeight < 920);

  if (isDefectIndex) {
    dark.push(3);
  }

  console.log('props.activeIndex', props.activeIndex, dark);

  const isDark = dark.includes(props.activeIndex);

  return (
    <div>
      <div
        className={classNames('fixed w-screen h-32 z-50 sx:h-16 left-0 right-0 top-0', {
          'bg-white': mobileOpened || os.isPc,
        })}
      >
        <div className="mx-auto flex flex-row items-center justify-between h-full sx:hidden  px-9 sx:px-0 max-w-screen-mxl overflow-hidden">
          <div style={{width: 131, height: 53, overflow: 'visible'}}>
            <img referrerPolicy="no-referrer" src={logo} className="object-fill" />
          </div>
          <div className={classNames('flex space-x-16 text-base text-black')}>
            {navis.map((item, index) => {
              const isActive = props.activeIndex === index;
              return (
                <span
                  key={index}
                  onClick={() => props.onChange(index)}
                  className={classNames({
                    'text-main': isActive,
                    'text-normal': !isActive,
                    'cursor-pointer': true,
                    'text-lg': true,
                    relative: true,
                  })}
                >
                  {item}
                  <i
                    style={{bottom: -10}}
                    className={classNames('absolute w-2/3 bg-main h-05 left-0 right-0 mx-auto', {
                      hidden: !isActive,
                    })}
                  ></i>
                </span>
              );
            })}
          </div>
        </div>
        <div className="hidden sx:block pl-5 pt-6 float-left" onClick={() => setMobileOpened(!mobileOpened)}>
          <div
            className={classNames(' w-5 h-05 my-1 duration-300 rounded-full', {
              'bg-white': isDark && !mobileOpened,
              'bg-black': !isDark || mobileOpened,
              transform: mobileOpened,
              'rotate-45': mobileOpened,
              '-translate-x-2': mobileOpened,
              'translate-y-0': mobileOpened,
            })}
          ></div>
          <div
            className={classNames(' w-5 h-05 my-1  duration-300 rounded-full', {
              'bg-white': isDark && !mobileOpened,
              'bg-black': !isDark || mobileOpened,
              'opacity-0': mobileOpened,
            })}
          ></div>
          <div
            className={classNames(' w-5 h-05 my-1 duration-300 rounded-full', {
              'bg-white': isDark && !mobileOpened,
              'bg-black': !isDark || mobileOpened,
              // 'bg-white': !isDark || mobileOpened,
              transform: mobileOpened,
              '-rotate-45': mobileOpened,
              '-translate-x-2': mobileOpened,
              '-translate-y-3': mobileOpened,
            })}
          ></div>
        </div>
        <div
          className={classNames(
            'fixed left-0 right-0 bottom-0 top-0 mt-16 bg-white transition duration-300 transform',
            {
              'translate-y-0': mobileOpened,
              'translate-y-full': !mobileOpened,
            },
          )}
        >
          {navis.map((item, index) => (
            <span
              key={index}
              onClick={() => {
                setMobileOpened(false);
                props.onChange(index);
              }}
              className={classNames({
                'text-black': true,
                'cursor-pointer': true,
                'text-opacity-60': true,
                'text-opacity-100': props.activeIndex === index,
                block: true,
                'py-4': true,
                'mx-4': true,
                'border-b': true,
                'border-gray-300': true,
                'text-base': true,
              })}
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
