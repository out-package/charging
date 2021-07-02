import {isWeixin, os} from '@/utils';
import React from 'react';
import Swiper from '../swiper/swiper';

interface ProductProps {
  title: string;
  picture: {src: string};
  params: {label: string; value: string}[];
  belowTitle: string;
  belowImages: {src: string}[];
}

function Product({title, picture, params, belowTitle, belowImages}: ProductProps) {
  return (
    <div className="h-screen box-border py-24 overflow-y-auto sx:py-10 sx:h-auto">
      <div className="max-w-screen-mxl mx-auto  h-full box-border px-24 flex items-center justify-center relative sx:px-4 sx:mx-4">
        <div className="flex flex-row justify-center items-center h-full cursor-pointer sx:flex-col sx:w-full w-full">
          <h2 className="text-xl text-main hidden sx:block font-sans font-bold pb-5">{title}</h2>
          <div className="pr-20 sx:order-2 sx:pr-0">
            <h2 className="text-5xl text-black sx:hidden font-sans font-bold pb-10">{title}</h2>
            <div className="flex flex-row flex-wrap py-16 sx:py-4 border-b border-t border-black border-solid border-opacity-09 lg:py-6">
              {params.map(item => (
                <dl className="w-1/2 pb-16 sx:pb-6 lg:pb-8">
                  <dt
                    className="text-lg text-black sx:text-xs sx:text-opacity-50 pb-4 sx:pb-2 whitespace-no-wrap opacity-80 sx:opacity-100"
                    style={{color: os.isPc ? '#323131' : undefined}}
                  >
                    <i className="mr-4 inline-block h-4 sx:w-0.5 sx:h-2 w-1 bg-main align-middle rounded"></i>
                    {item.label}
                  </dt>
                  <dd className="pl-4 text-3xl sx:text-sm">{item.value}</dd>
                </dl>
              ))}
            </div>
            <div className="pt-16 text-2xl lg:pt-8 sx:text-xs sx:pt-4 ">
              {belowTitle}
              <div className="flex space-x-6 pt-6 sx:pt-2">
                {belowImages.map(item => (
                  <img {...item} className="w-14 h-auto sx:w-10  object-contain" alt="" />
                ))}
              </div>
            </div>
          </div>
          <div className="sx:order-1">
            <img className="sx:w-40 sx:mb-2 sx:h-40 sx:object-contain" referrerPolicy="no-referrer" {...picture} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
