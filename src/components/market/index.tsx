import React from 'react';

interface Coord {
  lat?: number;
  lng?: number;
}

interface Panel {
  id: string;
  title: string;
  businessTime: string;
  address: string;
  type: string;
}

interface Prop extends Coord {
  selected: boolean;
  onClick?: () => void;
  describe: Panel;
}

export function CoordinateMarket(props: Coord) {
  return <img src="../../assets/images/map/gen.png" alt="" className="relative z-40 m-auto" />;
}

export function Market({selected, onClick, describe}: Prop) {
  const currentMarket = {
    src: '../../assets/images/map/ic_current.png',
  };
  const normalMarket = {
    src: '../../assets/images/map/market.png',
  };
  return (
    <div className="w-12 h-12 flex items-center justify-center relative overflow-visible">
      {selected ? (
        <div className="absolute left-0 right-0 bottom-2/3 m-auto">
          <CoordinateMarket />
        </div>
      ) : null}
      <img src={selected ? currentMarket.src : normalMarket.src} alt="" className="relative z-30" onClick={onClick} />
      {selected ? (
        <div className="absolute left-full -top-1/2 bg-white rounded-sm py-3 px-5 z-40">
          <div>
            <h3 className="text-normal text-xs pb-2">{describe.title}</h3>
            <p className="text-black text-opacity-50 text-xss whitespace-no-wrap pb-2">
              Thời gian làm việc：{describe.businessTime}
            </p>
            <p className="text-black text-opacity-50 text-xss pb-2">{describe.address}</p>
            <span className="w-20 h-5 flex items-center justify-center bg-main text-white rounded-full">
              {describe.type}
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
}
