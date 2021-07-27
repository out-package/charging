import React from 'react';

export default function MapItem(props: any) {
  return (
    <div className="p-4 ssx:p-2 text-black mx-4 shadow mb-3 rounded-xl">
      <div className="flex items-center pb-2 ssx:pb-1">
        <h3 className="text-black text-base ssx:text-xs">{props.current?.title}</h3>
        <span className="text-xss text-white px-2 py-1 bg-main rounded-full ml-2" onClick={() => props.onClick?.()}>
          {props.current?.type}
        </span>
      </div>
      <p className="pb-1 ssx:pb-1 text-black text-opacity-50 text-sm ssx:text-xs">
        Thời gian làm việc：{props.current?.businessTime}
      </p>
      <p className="pb-1 text-black text-opacity-50 text-sm ssx:text-xs">{props.current?.address}</p>
    </div>
  );
}
