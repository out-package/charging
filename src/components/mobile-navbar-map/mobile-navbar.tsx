import React from 'react';

function MobileNavbarMap() {
  return (
    <div className="flex flex-col h-12 flex-shrink-0 relative z-50">
      <nav className="px-4 flex justify-between bg-transparent h-16 bg-white">
        <ul className="flex items-center">
          <li className="h-6 w-6">
            <img className="mx-auto w-5" src="../../assets/images/scan/arrow.png" />
          </li>
        </ul>

        <ul className="flex items-center">
          <li>EpinMap</li>
        </ul>

        <ul className="flex items-center justify-center">
          <li>
            <img src="../../assets/images/map/kefu.png" alt="" />
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MobileNavbarMap;
