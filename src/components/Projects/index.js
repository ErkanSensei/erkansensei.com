import React, { Component } from 'react';

import FlipMove from 'react-flip-move';

import Macbook from '../Macbook';
import IPhone from '../IPhone';

import Card from '../Card';

import './styles.css';

const aoelogo = require('../../assets/img/aoelogo.png');
const erkanLogo = require('../../assets/img/profile2.png');
const ser = require('../../assets/img/ser.png');
const reactLogo = require('../../assets/img/logo.svg');
const hapsLogo = require('../../assets/img/hapsLogo.png');

const projects = [
  {
    name: 'AOEDB.net',
    image: aoelogo,
    codeLink: 'https://github.com/ErkanSensei/AOEdb.net',
    webLink: 'https://aoedb.net',
    description: 'An overhaul of the original AOEdb.net website in Vue.js',
    mainLanguage: 'Vue.js',
    technologies: ['Vue', 'Vue-router', 'Bootstrap'],
    platform: 'web',
  },
  {
    name: 'erkansensei.com',
    image: erkanLogo,
    codeLink: 'https://github.com/ErkanSensei/erkansensei.github.io',
    webLink: 'http://erkansensei.com',
    description: 'My website! Built in React',
    mainLanguage: 'React',
    technologies: ['React', 'FontAwesome 5'],
    platform: 'web',
  },
  {
    name: 'SwipeEatRepeat',
    image: ser,
    codeLink: null,
    iosLink: '',
    webLink: 'http://swipeeatrepeat.com',
    description: 'An app to help people find new places to eat!',
    mainLanguage: 'React',
    technologies: ['React Native', 'Redux', 'Native Base'],
    platform: 'iphone',
  },
  {
    name: 'SVG-to-ReactNativeSVG',
    image: reactLogo,
    codeLink: 'https://github.com/ErkanSensei/SVG-to-ReactNativeSVG',
    webLink: 'http://erkansensei.com/SVG-to-ReactNativeSVG/',
    description: 'A tool used to convert SVGs to ReactNative SVG',
    mainLanguage: 'Javascript',
    technologies: ['Javascript', 'HTML', 'CSS'],
    platform: 'web',
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
export default props => (
  <div style={{ width: '100%', height: '100%' }}>
    {projects.map(project => (
      <div className='projectContainer'>
        {project.platform === 'web'
          ? <Macbook image={project.image} />
          : <IPhone image={project.image} />}
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
);
