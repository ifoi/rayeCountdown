import React from 'react';
import ReactDOM from 'react-dom';
import Countdown from 'react-countdown';

ReactDOM.render(
  <Countdown date={Date.now() + 10000} />,
  document.getElementById('root')
);