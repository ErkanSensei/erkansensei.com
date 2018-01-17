import React, { Component } from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/fontawesome-free-solid';
import {
  faTwitter,
  faLinkedin,
  faGithub,
  faAngellist,
  faYoutube,
} from '@fortawesome/fontawesome-free-brands';

import './styles.css';

class Contact extends Component {
  componentDidMount() {
    const links = document.getElementById('contactIcons').childNodes;
    for (let j = 0; j < links.length; j++) {
      links[j].firstChild.classList.add('animated');
      links[j].firstChild.classList.add('bounceIn');
    }
    console.log('You can also contact me by carrier pigeon!'); //eslint-disable-line
    console.log('https://flypigeon.co/'); //eslint-disable-line
    console.log(':)'); //eslint-disable-line
  }
  render() {
    return (
      <div id='contact'>
        <div id='contactIcons'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='mailto:erkan@bytecamp.io'
          >
            <FontAwesomeIcon
              style={{ fontSize: '180px' }}
              icon={faEnvelope}
              color='white'
            />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://twitter.com/ErkanSensei'
          >
            <FontAwesomeIcon icon={faTwitter} color='#00aced' />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://angel.co/erkan-sen-1?public_profile=1'
          >
            <FontAwesomeIcon icon={faAngellist} color='white' />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.linkedin.com/in/erkansensei/'
          >
            <FontAwesomeIcon icon={faLinkedin} color='#3575B2' />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/ErkanSensei'
          >
            <FontAwesomeIcon icon={faGithub} color='white' />
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            style={{ fontSize: '180px', marginTop: '1.5vh' }}
            href='https://www.youtube.com'
          >
            <FontAwesomeIcon icon={faYoutube} color='#ff0000' />
          </a>
        </div>
      </div>
    );
  }
}

export default Contact;
