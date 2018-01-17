import React, { Component } from 'react';

import './styles.css';

class Blog extends Component {
  render() {
    return (
      <div id='underConstruction'>
        <h1 style={{ color: 'white' }}>Under Construction!</h1>
        <h1 role='img' className='logos' aria-label='guy'>🚧</h1>
      </div>
    );
  }
}

export default Blog;
