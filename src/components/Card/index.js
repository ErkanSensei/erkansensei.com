import React from 'react';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faExternalLinkAlt } from '@fortawesome/fontawesome-free-solid';
import {
  faVuejs,
  faReact,
  faJsSquare,
  faGithub,
  faApple,
} from '@fortawesome/fontawesome-free-brands';

import './styles.css';

export default props => (
  <div className='card' id='info'>
    <h2>{props.name}</h2>
    <h1
      style={{
        color: props.mainLanguage === 'Vue.js'
          ? '#64B587'
          : props.mainLanguage === 'React' ? '#71BFDB' : '#F3DF51',
      }}
    >
      <FontAwesomeIcon
        icon={
          props.mainLanguage === 'Vue.js'
            ? faVuejs
            : props.mainLanguage === 'React' ? faReact : faJsSquare
        }
      />
    </h1>
    <h4>{props.description}</h4>

    <p>Technologies: {props.technologies.join(', ')}</p>
    <div id='linksContainer'>
      {props.platform.indexOf('iphone') > -1 &&
        <a target='_blank' href={props.iosLink}>
          <h2><FontAwesomeIcon icon={faApple} color='black' /></h2>
        </a>}
      <a target='_blank' href={props.webLink}>
        <h2><FontAwesomeIcon icon={faExternalLinkAlt} color='black' /></h2>
      </a>
      {props.codeLink &&
        <a target='_blank' href={props.codeLink}>
          <h2><FontAwesomeIcon icon={faGithub} color='black' /></h2>
        </a>}
    </div>
    <div id={props.arrow} />
  </div>
);
