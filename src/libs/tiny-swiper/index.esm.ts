import SwiperPluginLazyload from './modules/lazyload';
import SwiperPluginPagination from './modules/pagination';
import SwiperPluginKeyboardControl from './modules/keyboardControl';
import SwiperPluginMousewheel from './modules/mousewheel';
import SwiperPluginNavigation from './modules/navigation';

export {default} from './core/index';
export type {Swiper, SwiperInstance, SwiperPlugin} from './core/index';

export {LIFE_CYCLES} from './core/eventHub';

export {
  SwiperPluginLazyload,
  SwiperPluginPagination,
  SwiperPluginKeyboardControl,
  SwiperPluginMousewheel,
  SwiperPluginNavigation,
};
