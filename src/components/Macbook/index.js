import React from 'react';
import './styles.css';

export default props => (
  <div className='mac_container'>
    <div className='mac_scaler'>
      <div className='mac_holder'>
        <div className='mac_screen'>
          <div className='mac_camera' />
          <div className='mac_screen_content'>
            <img src={props.image} id='mac_content' alt='logo' />
          </div>
        </div>
        <div className='mac_bottom'>
          <div className='mac_bottom_top_half'>
            <div className='mac_thumb_space' />
          </div>
        </div>
      </div>
    </div>
  </div>
);
