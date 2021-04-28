import React, {useState} from 'react';
import Dialog from 'rc-dialog';

function Form() {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <>
      <div className="h-screen bg-main">
        <div className="pt-40 text-center text-6xl text-white">Đăng ký hợp tác</div>
        <div className="pt-28">
          <div className="flex items-center justify-center pb-20">
            <label htmlFor="Tên" className="w-56 text-white text-opacity-80 text-base">
              Tên đơn vị kinh doanh
            </label>
            <input
              type="text"
              id="Tên"
              className="outline-none bg-white bg-opacity-10 h-14 w-96 border-white border-solid border-2 border-opacity-20 text-white px-3"
            />
          </div>
          <div className="flex items-center justify-center pb-20">
            <label htmlFor="THọ" className="w-56 text-white text-opacity-80 text-base">
              THọ tên
            </label>
            <input
              type="text"
              id="THọ"
              className="outline-none bg-white bg-opacity-10 h-14 w-96 border-white border-solid border-2 border-opacity-20 text-white px-3"
            />
          </div>
          <div className="flex items-center justify-center pb-20">
            <label htmlFor="Điện" className="w-56 text-white text-opacity-80 text-base">
              Điện thoại
            </label>
            <input
              type="text"
              id="Điện"
              className="outline-none bg-white bg-opacity-10 h-14 w-96 border-white border-solid border-2 border-opacity-20 text-white px-3"
            />
          </div>
          <div className="flex items-center justify-center pb-20">
            <label htmlFor="Địa" className="w-56 text-white text-opacity-80 text-base">
              Địa chỉ
            </label>
            <input
              type="text"
              id="Địa"
              className="outline-none bg-white bg-opacity-10 h-14 w-96 border-white border-solid border-2 border-opacity-20 text-white px-3"
            />
          </div>
          <button
            className="text-main text-base text-center h-14 leading-none bg-white mx-auto block w-52 outline-none focus:outline-none"
            onClick={() => setShowDialog(true)}
          >
            Gửi yêu cầu
          </button>
        </div>
      </div>
      <Dialog
        visible={showDialog}
        animation="zoom"
        maskAnimation="fade"
        onClose={() => setShowDialog(false)}
        forceRender
        wrapClassName="flex"
        className="m-auto w-1/2"
      >
        <div className="pb-16">
          <p className="h-64 text-center px-20 text-4xl text-black flex items-center justify-center">
            Gửi yêu cầu thành công, quý vị vui lòng chờ trong ít phút sẽ có chuyên viên liên hệ.
          </p>
          <button className="bg-main outline-none focus:outline-none px-16 h-14 text-base text-white mx-auto block">
            Xác nhận
          </button>
        </div>
      </Dialog>
    </>
  );
}

export default Form;
