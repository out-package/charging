import classNames from 'classnames';
import React, {HTMLAttributes} from 'react';

function About(props: HTMLAttributes<any>) {
  return (
    <div className={classNames('py-32 max-w-6xl mx-auto sx:pt-16 sx:pb-12', props.className)}>
      <h2 className="text-main text-6xl text-center pb-16 sx:pb-6 sx:text-xl">Giới thiệu</h2>
      <p className="text-center text-2xl leading-loose text-black text-opacity-75 sx:text-sm sx:px-5">
        Keepo là công ty hỗ trợ kỹ thuật chuyên về “IoT và dịch vụ cuộc sống”，chúng tôi cung cấp dịch vụ sạc pin chất
        lượng cao và an toàn cho người dùng. <br />
        Giữ kết nối với thế giới, cho cuộc sống luôn tràn đầy năng lượng.
      </p>
    </div>
  );
}

export default About;
