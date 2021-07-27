import React from 'react';

function MobileNavbar() {
  return (
    <div className="flex flex-col h-12 flex-shrink-0 pt-4">
      <nav className="px-4 flex justify-between bg-transparent h-16" style={{background: '#E9E9E9'}}>
        <ul className="flex items-center">
          <li className="h-6 w-6">
            <img className="mx-auto w-5" src="../../assets/images/scan/arrow.png" />
          </li>
        </ul>

        <ul className="flex items-center">
          <li>
            <h1 className="pl-8 lg:pl-0 text-gray-700">
              <img className="mx-auto w-24" src="../../assets/images/logo.svg" />
            </h1>
          </li>
        </ul>

        <ul className="flex items-center">
          <li className="pr-6">{/*  */}</li>
          <li className="h-10 w-10">{/*  */}</li>
        </ul>
      </nav>
    </div>
  );
}

export default MobileNavbar;
