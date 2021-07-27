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
  return <img src="../../assets/images/map/gen.svg" alt="" className="relative z-40 m-auto" />;
}

export function Market({selected, onClick, describe}: Prop) {
  const normalMarket = {
    src: '../../assets/images/map/market.svg',
  };
  return (
    <div className="w-12 h-12 flex items-center justify-center relative overflow-visible">
      {selected ? (
        <div className="absolute left-0 right-0 bottom-2/3 m-auto">
          <CoordinateMarket />
        </div>
      ) : null}
      <img src={normalMarket.src} alt="" className="relative z-30" onClick={onClick} />
    </div>
  );
}

export function CurrentPositionMarket(props: Coord & {hideRocker: boolean}) {
  return (
    <div className="w-12 h-12 flex items-center justify-center relative overflow-visible">
      {!props.hideRocker ? (
        <div className="absolute left-0 right-0 bottom-2/3 m-auto">
          <CoordinateMarket />
        </div>
      ) : null}
      <img src="../../assets/images/map/ic_current.svg" alt="" className="relative z-30" />
    </div>
  );
}
