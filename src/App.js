import React from 'react';
import $ from 'jquery';
import Dropdown from 'react-dropdown';

import Terminal from './components/Terminal';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Resume from './components/Resume';
import 'react-dropdown/style.css';
import './App.css';

const components = {
  Projects,
  Blog,
  Contact,
  Resume,
};

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      content: 'Projects',
    };
  }

  onSelect = (text) => {
      var elementClicked = $('#content');
      var destination = $(elementClicked).offset().top;
      $('html, body').animate({
        scrollTop: parseInt($('#App').scrollTop() + destination),
      });
      return;
  };

  render() {
    return (
      <div className='App' id='App'>
        <div className='textContainer'>
          <div className='innerContainer'>
            <p className='mainText'>HELLO</p>
            <p className='mainText'>I AM</p>
            <p className='mainText'>ERKAN SEN,</p>
            <Dropdown
              className='jumper'
              options={['A WEB', 'A MOBILE', 'AN EXPERIENCED', 'A SOCIAL']}
              onChange={() => setTimeout(this.onSelect, 300)}
              value='A WEB'
              placeholder='Select an option'
            />
            <p className='mainText'>DEVELOPER</p>
          </div>
        </div>
        <div id='content'><p>HelloWorld!</p></div>
      </div>
    );
  }
}
