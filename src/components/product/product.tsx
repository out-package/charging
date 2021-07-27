import {isWeixin, os} from '@/utils';
import classNames from 'classnames';
import React from 'react';
import Swiper from '../swiper/swiper';

interface ProductProps {
  title: string;
  picture: {src: string};
  params: {label: string; value: string}[];
  belowTitle: string;
  belowImages: {src: string}[];
  id?: string;
}

function Product({title, picture, params, belowTitle, belowImages, id}: ProductProps) {
  return (
    <div
      className={classNames('h-screen box-border py-24 overflow-y-auto sx:pb-0', {
        'sx:pt-20': !os.isSmallScreen,
        'sx:pt-12': os.isSmallScreen,
      })}
      id={id}
    >
      <div className="max-w-screen-mxl mx-auto  h-full box-border flex items-center justify-center relative sx:mx-8">
        <div className="flex flex-row justify-center items-center h-full cursor-pointer sx:flex-col sx:w-full w-full">
          <h2 className="text-xl text-main hidden sx:block font-sans font-bold pb-5">{title}</h2>
          <div className="pr-20 sx:order-2 sx:pr-0 flex-1 overflow-hidden">
            <h2 className="text-6xl text-black sx:hidden font-sans font-bold pb-5">{title}</h2>
            <div className="flex flex-row flex-wrap pt-12 sx:pt-2 border-b border-t sx:border-t-0 border-black border-solid border-opacity-09">
              {params.map(item => (
                <dl className="w-1/2 pb-16 sx:pb-5 lg:pb-8 overflow-hidden">
                  <dt
                    className="text-lg text-black sx:text-xs sx:text-opacity-50 pb-2 whitespace-no-wrap opacity-80 sx:opacity-100 flex w-full overflow-hidden"
                    style={{color: os.isPc ? '#323131' : undefined}}
                  >
                    <img
                      src="../../assets/images/tag.png"
                      className="mr-4 w-2 sx:mr-2 sx:w-0.5 h-5 sx:h-2 sx:mt-1.5 mt-2"
                    />
                    <span className="flex-1 whitespace-normal text-2xl sx:text-xs">{item.label}</span>
                  </dt>
                  <dd className="pl-4 text-5xl font-semibold sx:text-xs text-normal">{item.value}</dd>
                </dl>
              ))}
            </div>
            <div className="pt-10 text-2xl lg:pt-8 sx:text-xs sx:pt-4 ">
              <span className="text-3xl font-semibold sx:text-xs">{belowTitle}</span>
              <div className="flex space-x-6 pt-6 sx:pt-2 items-start">
                {belowImages.map(item => (
                  <img {...item} className="w-20 h-auto sx:w-10  object-contain" alt="" />
                ))}
              </div>
            </div>
          </div>
          <div className="sx:order-1">
            <img
              className={classNames('sx:mb-2 object-contain w-564px', {
                'sx:mt-2': !os.isSmallScreen,
                'sx:mt-4': os.isSmallScreen,
                'sx:h-48': !os.isSmallScreen,
                'sx:h-40': os.isSmallScreen,
              })}
              referrerPolicy="no-referrer"
              {...picture}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
