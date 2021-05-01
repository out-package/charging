import React, {forwardRef, PropsWithChildren, Ref, useEffect, useImperativeHandle, useRef} from 'react';
import SwiperCore, {SwiperInstance} from '../../libs/tiny-swiper';
import AutoPlay from '../../libs/tiny-swiper/modules/autoPlay';
import Mousewheel from '../../libs/tiny-swiper/modules/mousewheel';
import Pagination from '../../libs/tiny-swiper/modules/pagination';
import classNames from 'classnames';
import {UserOptions} from '@/libs/tiny-swiper/core/options';

SwiperCore.use([AutoPlay, Mousewheel, Pagination]);

interface Swiper extends PropsWithChildren<UserOptions> {
  onSliceChange?: (swiper: SwiperInstance, index: number) => void;
}

export interface SwiperRef {
  getSwiper: () => SwiperInstance | null;
}

const Swiper = forwardRef<SwiperRef, Swiper>(({children, ...props}, forwardRef) => {
  const ref = useRef<HTMLDivElement>(null);
  const swiperInstance = useRef<SwiperInstance | null>(null);

  const childrens = React.Children.toArray(children).filter(Boolean);

  function getSwiper() {
    return swiperInstance.current;
  }

  useImperativeHandle(
    forwardRef,
    () => {
      return {
        getSwiper,
      };
    },
    [],
  );

  useEffect(() => {
    const swiper = (swiperInstance.current = new SwiperCore(ref.current!, {
      slidesPerView: childrens.length,
      ...props,
    }));

    swiper.on('before-slide', (_: any, _1: any, idx: number) => {
      props.onSliceChange?.(swiper, idx);
    });
  }, []);

  return (
    <div ref={ref} className="w-full h-full overflow-hidden">
      <div className="swiper-wrapper">
        {React.Children.map(childrens, item => {
          return item ? <div className={classNames('swiper-slide h-auto', props.slideClass)}>{item}</div> : null;
        })}
      </div>
    </div>
  );
});

export default Swiper;
