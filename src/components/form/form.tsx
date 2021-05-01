import React, {useState} from 'react';
import Dialog from 'rc-dialog';

function Form() {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <>
      <div className="h-screen bg-main flex flex-col items-center justify-center box-border pt-20 sx:pt-16">
        <div className="text-center text-6xl text-white sx:text-xl">Đăng ký hợp tác</div>
        <div className="pt-32 lg:pt-16 sx:pt-8">
          <div className="flex items-center justify-center pb-20 lg:pb-12 sx:pb-6">
            <label htmlFor="Tên" className="w-56 text-white text-opacity-75 text-base sx:w-32 sx:pr-5 sx:text-xs">
              Tên đơn vị kinh doanh
            </label>
            <input
              type="text"
              id="Tên"
              className="outline-none bg-white bg-opacity-05 py-3 w-96 border-white border-solid border-2 border-opacity-25 text-white px-3 sx:w-40 sx:h-7"
            />
          </div>
          <div className="flex items-center justify-center pb-20 lg:pb-12 sx:pb-6">
            <label htmlFor="THọ" className="w-56 text-white text-opacity-75 text-base sx:w-32 sx:pr-5 sx:text-xs">
              THọ tên
            </label>
            <input
              type="text"
              id="THọ"
              className="outline-none bg-white bg-opacity-05 py-3 w-96 border-white border-solid border-2 border-opacity-25 text-white px-3 sx:w-40 sx:h-7"
            />
          </div>
          <div className="flex items-center justify-center pb-20 lg:pb-12 sx:pb-6">
            <label htmlFor="Điện" className="w-56 text-white text-opacity-75 text-base sx:w-32 sx:pr-5 sx:text-xs">
              Điện thoại
            </label>
            <input
              type="text"
              id="Điện"
              className="outline-none bg-white bg-opacity-05 py-3 w-96 border-white border-solid border-2 border-opacity-25 text-white px-3 sx:w-40 sx:h-7"
            />
          </div>
          <div className="flex items-center justify-center pb-20 lg:pb-12 sx:pb-6">
            <label htmlFor="Địa" className="w-56 text-white text-opacity-75 text-base sx:w-32 sx:pr-5 sx:text-xs">
              Địa chỉ
            </label>
            <input
              type="text"
              id="Địa"
              className="outline-none bg-white bg-opacity-05 py-3 w-96 border-white border-solid border-2 border-opacity-25 text-white px-3 sx:w-40 sx:h-7"
            />
          </div>
          <div className="flex pb-20 lg:pb-12 sx:pb-6">
            <div className="w-56 text-white text-opacity-75 text-base sx:w-32 sx:pr-5 sx:text-xs"></div>
            <button
              className="text-main text-base text-center h-16 leading-none bg-white block w-56 outline-none focus:outline-none sx:h-8 sx:w-32 sx:mt-4"
              onClick={() => setShowDialog(true)}
            >
              Gửi yêu cầu
            </button>
          </div>
        </div>
      </div>
      <Dialog
        visible={showDialog}
        animation="zoom"
        maskAnimation="fade"
        onClose={() => setShowDialog(false)}
        forceRender
        wrapClassName="flex"
        className="m-auto w-1/2 sx:w-4/5"
      >
        <div className="pb-16 sx:pb-6">
          <p className="h-64 text-center px-20 text-4xl text-black flex items-center justify-center sx:text-xs sx:px-2 sx:h-auto sx:py-12">
            Gửi yêu cầu thành công, quý vị vui lòng chờ trong ít phút sẽ có chuyên viên liên hệ.
          </p>
          <button className="bg-main outline-none focus:outline-none px-16 h-14 text-base text-white mx-auto block sx:h-8 sx:px-8 sx:text-sm">
            Xác nhận
          </button>
        </div>
      </Dialog>
    </>
  );
}

export default Form;
