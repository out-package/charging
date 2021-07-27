import Actionsheet from '@/components/actionsheet';
import MobileNavbarMap from '@/components/mobile-navbar-map/mobile-navbar';
import GoogleMapReact from 'google-map-react';
import classNames from 'classnames';
import React, {useEffect, useRef, useState} from 'react';
import {CoordinateMarket, CurrentPositionMarket, Market} from '@/components/market';
import mockData from './mockdata';
import AlloyFinger from '@/components/alloy-finger';
import MapItem from '@/components/map-item';
import {getLatLng, openApp as openGoogleMapApp} from '@/utils';

function Map() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  const [currentCenter, setCurrentCenter] = useState({
    lat: 10.99835602,
    lng: 77.01502627,
  });
  const [position, setPosition] = useState(false);
  const [active, setActive] = useState('');
  const [showAll, setShowAll] = useState(false);
  const [currentSelected, setCurrentSelected] = useState<typeof mockData[number] | null>(null);
  const ref = useRef<any>(null);

  useEffect(() => {
    // TODO: mock 定位操作
    setTimeout(() => {
      setPosition(true);

      // TODO: 请切换到正常的
      ref.current?.map_.setCenter(defaultProps.center);
      setCurrentCenter(defaultProps.center);
    }, 5000);

    // getLatLng().then(res => {
    //   setPosition(true);

    //   // TODO: 请切换到正常的
    //   // ref.current?.map_.setCenter(defaultProps.center);

    //   // TODO: 获取当前经纬度
    //   console.log(res.coords.latitude, res.coords.longitude, res.coords);
    // });
  }, []);

  return (
    <div style={{background: '#E9E9E9'}} className="h-screen overflow-y-auto flex flex-col overflow-x-hidden">
      <MobileNavbarMap onClick={() => setShowAll(false)} />
      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="flex-1 flex items-center justify-center relative">
          <GoogleMapReact
            ref={ref}
            bootstrapURLKeys={{key: 'AIzaSyCi_UGl2eABWh5ZlVdRhUFm1DNa2GacYfw'}}
            defaultCenter={{
              lat: 11.99835602,
              lng: 78.01502627,
            }}
            defaultZoom={defaultProps.zoom}
            options={{
              fullscreenControl: false,
              zoomControl: false,
              keyboardShortcuts: false,
            }}
            onClick={() => {
              setShowAll(false);
            }}
          >
            {position ? (
              <CurrentPositionMarket lat={currentCenter.lat} lng={currentCenter.lng} hideRocker={!!currentSelected} />
            ) : null}
            {mockData.map(item => (
              <Market
                selected={active === item.id}
                lat={item.lat}
                lng={item.lng}
                describe={item}
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
          'translate-y-0': true,
          'overflow-visible': true,
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
        style={{backgroundColor: '#fafafa'}}
      >
        <img
          src="../../assets/images/map/ic_Location.svg"
          alt=""
          className="absolute right-2 z-50"
          style={{top: -70}}
          onClick={() => {
            setActive('');
            setShowAll(false);
            ref.current?.map_.setCenter(defaultProps.center);
          }}
        />
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
          <>
            <div className="py-1 pt-3 flex items-center justify-center">
              <img src="../../assets/images/map/plus.svg" alt="" onClick={() => setShowAll(!showAll)} />
            </div>
            <div className="py-2 text-center text-black text-opacity-50">Cửa hàng gần</div>
          </>
        </AlloyFinger>
        <div
          className={classNames('overflow-y-auto transition-all duration-300', {
            'overflow-y-auto': true,
            'overflow-x-hidden': true,
            'h-32': !showAll,
            'ssx:h-24': !showAll,
            'h-96': showAll,
            'ssx:h-72': showAll,
          })}
        >
          <MapItem
            current={currentSelected || mockData[0]}
            onClick={() => {
              // openGoogle 可以输入门牌号等
              openGoogleMapApp(`${(currentSelected || mockData[0]).lat},${(currentSelected || mockData[0]).lng}`);
            }}
          />
          {!showAll
            ? null
            : mockData
                .filter(v => (currentSelected || mockData[0]).id !== v.id)
                .map(item => (
                  <MapItem
                    current={item}
                    onClick={() => {
                      openGoogleMapApp(`${item.lat},${item.lng}`);
                    }}
                  />
                ))}
        </div>
      </div>
    </div>
  );
}

export default Map;
export const path = '/map';
