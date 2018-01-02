import React from 'react';

import './styles.css';

export default props => (
  <div className='wrapper'>
    <div className='iphone'>
      <div className='lock' />
      <div className='volume up' />
      <div className='volume down' />
      <div className='camera' />
      <div className='speaker' />
      <div className='screen'>
        <img src={props.image} id='iphoneImage' alt='logo' />
      </div>
      <div className='iphoneButton'>
        <div className='iphoneSquare' />
      </div>
    </div>
  </div>
);
