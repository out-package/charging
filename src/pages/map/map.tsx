import Actionsheet from '@/components/actionsheet';
import MobileNavbarMap from '@/components/mobile-navbar-map/mobile-navbar';
import GoogleMapReact from 'google-map-react';
import classNames from 'classnames';
import React, {useRef, useState} from 'react';
import {CoordinateMarket, Market} from '@/components/market';
import mockData from './mockdata';
import AlloyFinger from '@/components/alloy-finger';

function Map() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  const [active, setActive] = useState('');
  const [showAll, setShowAll] = useState(false);
  const [currentSelected, setCurrentSelected] = useState<typeof mockData[number] | null>(null);
  const ref = useRef<any>(null);

  const total = currentSelected?.data.length || 0;
  const showLength = showAll ? total : total === 1 ? 1 : 2;

  const translateY = !currentSelected ? '100%' : 0;

  return (
    <div style={{background: '#E9E9E9'}} className="h-screen overflow-y-auto flex flex-col overflow-x-hidden">
      <MobileNavbarMap />
      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="flex-1 flex items-center justify-center relative">
          <img
            src="../../assets/images/map/ic_Location.png"
            alt=""
            className="fixed right-2 bottom-2 z-50"
            onClick={() => {
              setActive('');
              ref.current?.map_.setCenter(defaultProps.center);
            }}
          />
          <GoogleMapReact
            ref={ref}
            bootstrapURLKeys={{key: 'AIzaSyCi_UGl2eABWh5ZlVdRhUFm1DNa2GacYfw'}}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            options={{
              fullscreenControl: false,
              zoomControl: false,
              keyboardShortcuts: false,
            }}
          >
            {!active ? <CoordinateMarket lat={10.99835602} lng={77.01502627} /> : null}
            {mockData.map(item => (
              <Market
                selected={active === item.id}
                lat={item.lat}
                lng={item.lng}
                describe={item.data[0]}
                onClick={() => {
                  setActive(item.id);
                  setCurrentSelected(item);
                }}
              />
            ))}
          </GoogleMapReact>
        </div>
      </div>
      <div
        className={classNames({
          'overflow-y-auto': true,
          'overflow-x-hidden': true,
          'transition-all': true,
          'duration-300': true,
          transform: true,
          'max-h-full': true,
          'bg-white': true,
          fixed: true,
          'bottom-0': true,
          'left-0': true,
          'w-full': true,
          'z-50': true,
        })}
        style={{backgroundColor: '#fafafa', transform: `translateY(${translateY})`}}
      >
        {/*  */}
        <AlloyFinger
          onSwipe={(e: any) => {
            const direction = e.direction.toLowerCase();
            if (direction === 'up') {
              setShowAll(true);
            }
            if (direction === 'down') {
              if (!showAll) {
                setCurrentSelected(null);
              }
              setShowAll(false);
            }
          }}
        >
          <div className="py-3 ssx:py-2 flex items-center justify-center">
            <img src="../../assets/images/map/plus.png" alt="" onClick={() => setShowAll(!showAll)} />
          </div>
        </AlloyFinger>
        <div className="pt-2 pb-4 ssx:py-2 text-center text-black text-opacity-50">{currentSelected?.title}</div>
        <div
          className={classNames('overflow-y-auto transition-all duration-300', {
            'h-80': !showAll,
            'ssx:h-56': !showAll,
          })}
          style={{height: showAll ? '80vh' : undefined}}
        >
          {Array.from({length: showLength}).map((_, i) => {
            const current = currentSelected?.data[i];
            return (
              <div className="p-5 ssx:p-2 text-black mx-4 shadow mb-3 rounded-xl">
                <div className="flex items-center pb-2 ssx:pb-1">
                  <h3 className="text-black text-base ssx:text-sm">{current?.title}</h3>
                  <span className="text-xss text-white px-2 py-1 bg-main rounded-full ml-2">{current?.type}</span>
                </div>
                <p className="pb-2 ssx:pb-1 text-black text-opacity-50 text-sm ssx:text-xs">
                  Thời gian làm việc：{current?.businessTime}
                </p>
                <p className="pb-2 ssx:pb-1 text-black text-opacity-50 text-sm ssx:text-xs">{current?.address}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

//  translate-y-full

export default Map;
export const path = '/map';
