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
import $ from 'jquery';

import './styles.css';

export default class Card extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div className='card' id='info'>
        <h2>{this.props.name}</h2>
        <h1
          style={{
            color: this.props.mainLanguage === 'Vue.js'
              ? '#64B587'
              : this.props.mainLanguage === 'React' ? '#71BFDB' : '#F3DF51',
          }}
        >
          <FontAwesomeIcon
            icon={
              this.props.mainLanguage === 'Vue.js'
                ? faVuejs
                : this.props.mainLanguage === 'React' ? faReact : faJsSquare
            }
          />
        </h1>
        <h4>{this.props.description}</h4>

        <p>Technologies: {this.props.technologies.join(', ')}</p>
        <div className='linksContainer'>
          {this.props.platform.indexOf('iphone') > -1 &&
            <a target='_blank' className='button diagonal' href={this.props.iosLink}>
              <p>App Store</p>
            </a>}
          <a target='_blank' className='button diagonal' href={this.props.webLink}>
            <p>Website</p>
          </a>
          {this.props.codeLink &&
            <a
              target='_blank'
              className='button diagonal'
              href={this.props.codeLink}
            >
              <p>Source</p>
            </a>}
        </div>
        <div id={this.props.arrow} />
      </div>
    );
  }
}
