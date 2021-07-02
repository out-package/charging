import React from 'react';

function ProductBelow() {
  return (
    <div className="h-screen box-border py-24 overflow-y-auto sx:py-6">
      <div className="max-w-screen-mxl mx-auto  h-full box-border px-24 flex items-center justify-center relative sx:px-4 sx:mx-4">
       
      <div className="flex flex-row justify-center items-center h-full cursor-pointer sx:flex-col sx:w-full w-full">
            <div className="pr-20 sx:order-2 sx:pr-0">
              <h2 className="text-5xl text-block sx:text-xl sx:text-center font-sans font-bold pb-10">Sạc dự phòng</h2>

              <div className="flex flex-row flex-wrap py-16 sx:py-4 border-b border-t border-black border-solid border-opacity-09 lg:py-6">
                <dl className="w-1/2 sx:w-1/2 pb-16 sx:pb-6 lg:pb-8">
                  <dt className="text-lg text-black sx:text-xs sx:text-opacity-50 pb-4 sx:pb-2 whitespace-no-wrap opacity-80" style={{ color:'#323131' }}>
                    <i className="mr-4 inline-block h-4 w-1 bg-main align-middle rounded"></i>
                    Trọng lượng
                  </dt>
                  <dd className="pl-4 text-3xl sx:text-sm">142gr </dd>
                </dl>
                <dl className="w-1/2 sx:w-1/2 pb-16 sx:pb-6">
                  <dt className="text-lg text-black sx:text-xs sx:text-opacity-50 pb-4 sx:pb-2 whitespace-no-wrap opacity-80" style={{ color:'#323131' }}>
                    <i className="mr-4 inline-block h-4 w-1 bg-main align-middle rounded"></i>Kích thước
                  </dt>
                  <dd className="pl-4 text-3xl sx:text-sm">132*66*15mm</dd>
                </dl>
                <dl className="w-1/2 sx:w-1/2">
                  <dt className="text-lg text-black sx:text-xs sx:text-opacity-50 pb-4 sx:pb-2 whitespace-no-wrap opacity-80" style={{ color:'#323131' }}>
                    <i className="mr-4 inline-block h-4 w-1 bg-main align-middle rounded"></i>Môi trường hoạt động
                  </dt>
                  <dd className="pl-4 text-3xl sx:text-sm">-25℃~55℃</dd>
                </dl>
                <dl className="w-1/2 sx:w-1/2">
                  <dt className="text-lg text-black sx:text-xs sx:text-opacity-50 pb-4 sx:pb-2 whitespace-no-wrap opacity-80" style={{ color:'#323131' }}>
                    <i className="mr-4 inline-block h-4 w-1 bg-main align-middle rounded"></i>Số lần sạc
                  </dt>
                  <dd className="pl-4 text-3xl sx:text-sm">≥300</dd>
                </dl>
              </div>
              <div className="pt-16 text-2xl lg:pt-8 sx:text-xs sx:pt-4 ">
              Kiểm định chất lượng
                <div className="flex space-x-6 pt-6 sx:pt-2">
                  <img src="../../assets/images/ce.png" className="w-14 h-auto sx:w-10  object-contain" alt="" />
                  <img src="../../assets/images/rohs.png" className="w-14 h-auto sx:w-10  object-contain" alt="" />
                  <img src="../../assets/images/rohs备份.png" className="w-14 h-auto sx:w-10  object-contain" alt="" />
                </div>
              </div>
            </div>
            <div className="sx:order-1">
              <img
                className="sx:w-40 sx:mb-2 sx:h-40 sx:object-contain"
                referrerPolicy="no-referrer"
                src="../../assets/images/cx2.png"
              />
            </div>
          </div>

      </div>
    </div>
  );
}

export default ProductBelow;
