import classNames from 'classnames';
import * as React from 'react';

interface Props {
  onRequestClose?: () => void;
  onClick?: (i: number) => void;
  visible: boolean;
  menus: string[];
}

const Actionsheet = (props: Props) => {
  const {onRequestClose, menus, visible, onClick} = props;

  const handleClick = (e: any) => onClick?.(e.target.getAttribute('data-id'));

  return (
    <div>
      {visible ? (
        <div
          onClick={onRequestClose}
          className="fixed z-40 w-full h-full left-0 top-0 bg-black bg-opacity-50 transition-all delay-150 duration-300 ease-in-out"
          style={{backdropFilter: 'blur(2px)'}}
        />
      ) : null}
      <div
        className={classNames(
          'fixed z-50 left-0 bottom-0 w-full translate-x-0  transform transition-all delay-150 duration-100 ease-in-out',
          {
            'translate-y-full': !visible,
          },
        )}
      >
        <div
          className="h-16 bg-white rounded-t-3xl flex items-center justify-center text-black"
          style={{color: '#8A8A8A'}}
        >
          Vui lòng lựa chọn phương thức thanh toán
        </div>
        <div className="transform">
          {menus.map((text: any, i: number) => {
            return (
              <>
                <div className="h-px bg-gray-200"></div>
                <div
                  key={i}
                  className="relative h-16 flex items-center justify-center text-black bg-white"
                  data-id={i}
                  onClick={handleClick}
                >
                  {text}
                </div>
              </>
            );
          })}
        </div>
        <div className="h-2 bg-gray-200"></div>
        <div>
          <div
            className="h-16 bg-white flex items-center justify-center text-black"
            onClick={onRequestClose}
            style={{color: '#2869BB'}}
          >
            Huỷ
          </div>
        </div>
      </div>
    </div>
  );
};

export default Actionsheet;
