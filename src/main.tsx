import React from 'react';
import ReactDOM from 'react-dom';
import 'swiper/swiper-bundle.min.css';
import 'rc-dialog/assets/index.css';
import './index.css';
import Router from './router';

Router().then(Router => {
  ReactDOM.render(
    <React.StrictMode>
      <Router />
    </React.StrictMode>,
    document.getElementById('root'),
  );
});
