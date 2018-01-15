import React from 'react';
import $ from 'jquery';
import Dropdown from 'react-dropdown';
import Card from './components/Card';
import IPhone from './components/IPhone';
import Macbook from './components/Macbook';
import 'react-dropdown/style.css';
import './App.css';

const aoelogo = require('./assets/img/aoelogo.png');
const erkanLogo = require('./assets/img/profile2.png');
const ser = require('./assets/img/ser.png');
const reactLogo = require('./assets/img/logo.svg');
const hapsLogo = require('./assets/img/hapsLogo.png');

const projects = [
  // {
  //   name: 'AOEDB.net',
  //   image: aoelogo,
  //   codeLink: 'https://github.com/ErkanSensei/AOEdb.net',
  //   webLink: 'https://aoedb.net',
  //   description: 'An overhaul of the original AOEdb.net website in Vue.js',
  //   mainLanguage: 'Vue.js',
  //   technologies: ['Vue', 'Vue-router', 'Bootstrap'],
  //   platform: 'web',
  // },
  // {
  //   name: 'erkansensei.com',
  //   image: erkanLogo,
  //   codeLink: 'https://github.com/ErkanSensei/erkansensei.github.io',
  //   webLink: 'http://erkansensei.com',
  //   description: 'My website! Built in React',
  //   mainLanguage: 'React',
  //   technologies: ['React', 'FontAwesome 5'],
  //   platform: 'web',
  // },
  {
    name: 'SwipeEatRepeat',
    image: ser,
    codeLink: 'https://github.com/ErkanSensei/SwipeEatRepeat',
    iosLink: '',
    webLink: 'http://swipeeatrepeat.com',
    description: 'An app to help people find new places to eat!',
    mainLanguage: 'React',
    technologies: ['React Native', 'Redux', 'Native Base'],
    platform: 'iphone',
  },
  // {
  //   name: 'SVG-to-ReactNativeSVG',
  //   image: reactLogo,
  //   codeLink: 'https://github.com/ErkanSensei/SVG-to-ReactNativeSVG',
  //   webLink: 'http://erkansensei.com/SVG-to-ReactNativeSVG/',
  //   description: 'A tool used to convert SVGs to ReactNative SVG',
  //   mainLanguage: 'Javascript',
  //   technologies: ['Javascript', 'HTML', 'CSS'],
  //   platform: 'web',
  // },
  {
    name: 'TheHAPS',
    image: hapsLogo,
    codeLink: '',
    webLink: 'https://thehaps.live/',
    iosLink: 'https://itunes.apple.com/us/app/thehaps/id1251645159?mt=8',
    description: 'An app to find events nearby',
    mainLanguage: 'React',
    technologies: ['React Native', 'Redux', 'Sails'],
    platform: 'iphone',
  },
  {
    name: 'TheHAPS',
    image: hapsLogo,
    codeLink: '',
    webLink: 'https://thehaps.live/',
    iosLink: 'https://itunes.apple.com/us/app/thehaps/id1251645159?mt=8',
    description: 'An app to find events nearby',
    mainLanguage: 'React',
    technologies: ['React Native', 'Redux', 'Sails'],
    platform: 'iphone',
  },
];

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      content: 'Projects',
    };
  }

  componentDidMount() {
    $(document).ready(() => {
      $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
          $('#menu').fadeIn(500);
        } else {
          $('#menu').fadeOut(500);
        }
      });
    });

    $('.linksContainer').each(function () {
      if ($(this).children().length > 2) {
        $(this).css('width', '70%');
      } else {
        $(this).css('width', '50%');
      }
    });
  }
  onSelect = (text) => {
    var elementClicked = $('#content');
    var destination = $(elementClicked).offset().top;
    $('html, body').animate({
      scrollTop: parseInt($('#App').scrollTop() + destination),
    });
  };

  render() {
    return (
      <div className='App' id='App'>
        {/* <div id='menu'></div> */}
        <div className='textContainer'>
          <div className='innerContainer'>
            <p className='mainText'>HELLO</p>
            <p className='mainText'>I AM</p>
            <p className='mainText'>ERKAN SEN,</p>
            <Dropdown
              className='jumper'
              options={['A WEB/MOBILE', 'A BLOGGING', 'AN EXPERIENCED', 'A SOCIAL']}
              onChange={() => setTimeout(this.onSelect, 300)}
              value='(fill in the blank)'
              placeholder='Select an option'
            />
            <p className='mainText'>DEVELOPER</p>
          </div>
        </div>
        <div id='content'>
          {projects.map(project => (
            <div className='projectContainer'>
              <IPhone image={project.image} />
              <Card
                name={project.name}
                codeLink={project.codeLink}
                webLink={project.webLink}
                description={project.description}
                mainLanguage={project.mainLanguage}
                technologies={project.technologies}
                arrow='ar'
                iosLink={project.iosLink}
                platform={project.platform}
              />
            </div>
            ))}
        </div>
      </div>
    );
  }
}
