import React from 'react';
import $ from 'jquery';
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';

import Projects from './components/Projects';
import Contact from './components/Contact';
import Blog from './components/Blog';
import Resume from './components/Resume';

import './App.css';

const components = {
  Projects,
  Contact,
  Blog,
  Resume,
}
export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      content: '(click here)',
      currentComponent: null,
    };
    this.colors = {
      'A WEB/MOBILE': '#DC4547',
      'A SOCIAL': '#F0DF6A',
      'AN EXPERIENCED': '#77B38A',
      'A CONTACTABLE': '#83BDD8',
    };
    this.contentPos = 0;
  }

  componentDidMount() {
    $(document).ready(() => {
      $('body').scroll(() => {
        if ($('#content').offset().top <= 500) {
          $('#menu').slideDown(150);
        } else {
          $('#menu').slideUp(150);
        }
      });
    });

    const headerStyles = ` <style id='diagonalAfter' type='text/css'> .diagonal:after {content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 500%;
    height: 1000%;
    background: #DC4547;
    color: white;
    z-index: -1;
    transform-origin: 0% 0%;
    transform: translateX(calc(20% - 25px)) translateY(10%) rotate(-45deg);
    transform: translateY(10%) translateX(16%) rotate(-45deg);
    transition: transform .3s;} .diagonal:hover {color: white}</style>`;
    $('head').append(headerStyles);

    this.contentPos = $('#content').offset().top - 80;
  }

  componentDidUpdate() {
    $('.linksContainer').each(function () {
      if ($(this).children().length > 2) {
        $(this).css('width', '60%');
      } else {
        $(this).css('width', '40%');
      }
    });
  }
  onSelect = (text) => {
    let textColor;
    let currentComponent;

    if (text.value === 'A WEB/MOBILE' || text.value === 'AN EXPERIENCED') {
      textColor = 'white';
    } else {
      textColor = 'black';
    }

    switch (text.value) {
      case 'A WEB/MOBILE': {
        currentComponent = 'Projects';
        break;
      }
      case 'A SOCIAL': {
        currentComponent = 'Blog';
        break;
      }
      case 'AN EXPERIENCED': {
        currentComponent = 'Resume';
        break;
      }
      case 'A CONTACTABLE': {
        currentComponent = 'Contact';
        break;
      }
      default: {
        break;
      }
    }
    
    $('.textContainer, .Dropdown-control')
      .css('background-color', this.colors[text.value])
      .css('color', textColor)
      .css('transition', 'background-color 0.05s linear');
    $('#menu')
      .css('background-color', this.colors[text.value])
      .css('color', textColor);

    setTimeout(
      () => {
        $('html, body').animate({
          scrollTop: this.contentPos,
        });
      },
      250,
    );

    $('#diagonalAfter').remove();
    const headerStyles = ` <style id='diagonalAfter' type='text/css'> .diagonal:after {content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 500%;
    height: 1000%;
    background: ${this.colors[text.value]};
    color: ${textColor};
    z-index: -1;
    transform-origin: 0% 0%;
    transform: translateX(calc(20% - 25px)) translateY(10%) rotate(-45deg);
    transform: translateY(10%) translateX(16%) rotate(-45deg);
    transition: transform .3s;} .diagonal:hover {color: ${textColor}}</style>`;
    $('head').append(headerStyles);
    this.setState({
      content: text.value,
      currentComponent,
    });
    
  };

  render() {
    const Comp = components[this.state.currentComponent];

    return (
      <div className='App' id='App'>
        <div id='menu'>
          <Dropdown
            className='menuDropdown'
            options={[
              'A WEB/MOBILE',
              'A SOCIAL',
              'AN EXPERIENCED',
              'A CONTACTABLE',
            ]}
            onChange={e => this.onSelect(e)}
            value={this.state.content.split(' ')[1]}
            placeholder='Select an option'
          />
        </div>
        <div className='textContainer'>
          <div className='innerContainer'>
            <p className='mainText'>HELLO</p>
            <p className='mainText'>I AM</p>
            <p className='mainText'>ERKAN SEN,</p>
            <Dropdown
              options={[
                'A WEB/MOBILE',
                'A SOCIAL',
                'AN EXPERIENCED',
                'A CONTACTABLE',
              ]}
              onChange={e => this.onSelect(e)}
              value={this.state.content}
              placeholder='Select an option'
            />
            <p className='mainText'>DEVELOPER</p>
          </div>
        </div>
        <div id='content' style={{ height: this.state.currentComponent ? null : '0' }}>
          {this.state.currentComponent && <Comp />}
        </div>
      </div>
    );
  }
}
