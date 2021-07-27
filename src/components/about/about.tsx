import classNames from 'classnames';
import React, {HTMLAttributes} from 'react';

function About(props: HTMLAttributes<any>) {
  return (
    <div style={{backgroundColor: '#F7F7F7'}} id="about">
      <div className={classNames('py-32 max-w-screen-mxl mx-auto sx:pt-10 sx:pb-12', props.className)}>
        <h2 className="text-black text-6xl font-bold text-center pb-16 sx:pb-6 sx:text-xl sx:text-main">Hợp tác</h2>
        <p className="text-center text-3xl leading-loose text-black text-opacity-75 sx:text-sm sx:px-5 font-semibold">
          Epin đang nỗ lực có mặt ở từng thành phố, trở thành nguồn pin di động tiện lợi và an toàn cho mọi người. Nếu
          như bạn có cửa hàng về lĩnh vực ẩm thực, dịch vụ và vui chơi giải trí, hãy liên hệ để hợp tác. Chúng tôi sẽ
          đặt trạm sạc dự phòng miễn phí.
        </p>
      </div>
    </div>
  );
}

export default About;
