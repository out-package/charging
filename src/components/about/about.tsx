import classNames from 'classnames';
import React, {HTMLAttributes} from 'react';

function About(props: HTMLAttributes<any>) {
  return (
    <div style={{ backgroundColor: '#F7F7F7' }}>
    <div className={classNames('py-32 max-w-6xl mx-auto sx:pt-16 sx:pb-12', props.className)}>
      <h2 className="text-black text-6xl font-bold text-center pb-16 sx:pb-6 sx:text-xl">Hợp tác</h2>
      <p className="text-center text-2xl leading-loose text-black text-opacity-75 sx:text-sm sx:px-5">
      Epin đang nỗ lực có mặt ở từng thành phố, trở thành nguồn pin di động tiện lợi và an toàn cho mọi người. Nếu như bạn có cửa hàng về lĩnh vực ẩm thực, dịch vụ và vui chơi giải trí, hãy liên hệ để hợp tác. Chúng tôi sẽ đặt trạm sạc dự phòng miễn phí.
      </p>
    </div>
    </div>
  );
}

export default About;
