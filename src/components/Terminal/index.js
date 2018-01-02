/* eslint-env browser */
import React from 'react';
import Typed from 'typed.js';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faJsSquare } from '@fortawesome/fontawesome-free-brands';
import { faChevronRight } from '@fortawesome/fontawesome-free-solid';
import './styles.css';

const erkanLogo = require('../../assets/img/profile2.png');

const newLine = <span><br /><FontAwesomeIcon icon={faChevronRight} className='start' /> </span>;
export default class Terminal extends React.Component {
  constructor() {
    super();
    this.state = {
      loaded: false,
    };
  }
  componentDidMount() {
    const typed = new Typed('#typed', {
      stringsElement: '#typed-strings',
      onComplete: () => {
        const projButton = document.getElementsByClassName('projectButton');
        for (let i = 0; i < projButton.length; i += 1) {
          const renderComponent = projButton[i].childNodes[0].innerText.replace(
            /\s\s+/g,
            '',
          );
          projButton[i].onclick = () => this.props.handleClick(renderComponent);
        }
        const headerButton = document.getElementsByClassName('headerButton');
        for (let i = 0; i < headerButton.length; i += 1) {
          const renderComponent = headerButton[i].childNodes[
            0
          ].innerText.replace(/\s\s+/g, '');
          headerButton[i].onclick = () =>
            this.props.handleClick(renderComponent);
        }
        typed.destroy();
        const parent = document.getElementById('console');
        let child = document.getElementById('typed-strings');
        parent.removeChild(child);
        child = document.getElementById('typed');
        parent.removeChild(child);
        this.setState({ loaded: true });
      },
    });
  }

  render() {
    return (
      <div
        id='terminal'
        style={{
          width: this.props.content ? '70%' : '80%',
          height: this.props.content ? '18%' : '60%',
          border: this.props.content ? '0' : '1px solid #333333',
          display: this.props.content ? 'flex' : 'block',
          alignItems: this.props.content ? 'center' : null,
          justifyContent: this.props.content ? 'center' : null,
        }}
      >
        <div
          id='header'
          style={{
            display: this.props.content ? 'flex' : 'none',
          }}
        >
          <button className='headerButton'>
            <strong>Projects</strong>
            {' '}
            <span role='img' className='logos' aria-label='laptop'>
              &nbsp;💻
            </span>
          </button>
          <button className='headerButton'>
            <strong>
              &nbsp;&nbsp;&nbsp;&nbsp;Blog&nbsp;&nbsp;&nbsp;&nbsp;
            </strong>
            {' '}
            <span role='img' className='logos' aria-label='newspaper'>
            &nbsp;&nbsp;📰
            </span>
          </button>
          {' '}
          <img src={erkanLogo} alt='logo' id='headerLogo' />
          <button className='headerButton'>
            <strong>Resume</strong>
            {' '}
            <span role='img' className='logos' aria-label='clipboard'>
              &nbsp;📋
            </span>
          </button>
          <button className='headerButton'>
            <strong>Contact</strong>
            {' '}
            <span role='img' className='logos' aria-label='mail'>&nbsp;&nbsp;✉️</span>
          </button>
        </div>
        <svg
          id='bar'
          style={{
            display: this.props.content ? 'none' : 'block',
          }}
        >
          <circle cx='24' cy='20' r='10' fill='#EC685C' className='button' />
          <circle cx='54' cy='20' r='10' fill='#F4BE4F' className='button' />
          <circle cx='84' cy='20' r='10' fill='#61C653' className='button' />
        </svg>
        <div
          id='console'
          style={{
            display: this.props.content ? 'none' : 'block',
          }}
        >
          <div id='typed-strings'>
            <p>
              {newLine} Hello! <span role='img' className='logos' aria-label='guy'>👋🏻</span>
              {newLine}
              {' '}
              My name is
              {' '}
              <strong>Erkan Sen</strong>
              {' '}
              <span role='img' className='logos' aria-label='guy'>🙋🏻‍♂️</span>
              . I am a
              {' '}
              <strong>developer</strong>
              {' '}
              <span role='img' className='logos' aria-label='guy'>👨🏻‍💻</span>
              {' '}
              from <strong> Houston, Texas</strong>
              {' '}
              who loves using Javascript!
              {' '}
              <FontAwesomeIcon icon={faJsSquare} id='jslogo'/>
              {newLine} Here is what I spend my time doing:
              <br />
              {' '}
              <span className='projectButtonContainer'>
                <button className='projectButton'>
                  <strong className='terminalLinks'>Projects</strong>
                  {' '}
                  <span role='img' className='logos' aria-label='laptop'>
                    &nbsp;💻
                  </span>
                </button>
                <button className='projectButton'>
                  <strong className='terminalLinks'>
                    &nbsp;&nbsp;&nbsp;&nbsp;Blog&nbsp;&nbsp;&nbsp;&nbsp;
                  </strong>
                  {' '}
                  <span role='img' className='logos' aria-label='newspaper'>
                    &nbsp;📰
                  </span>
                </button>
              </span>
              <br />
              {' '}
              <span className='projectButtonContainer'>
                <button className='projectButton'>
                  <strong className='terminalLinks'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;About&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</strong>
                  {' '}
                  <span role='img' className='logos' aria-label='clipboard'>
                  &nbsp;&nbsp;&nbsp;&nbsp;📋
                  </span>
                </button>
                <button className='projectButton'>
                  <strong className='terminalLinks'>Contact</strong>
                  {' '}
                  <span role='img' className='logos' aria-label='mail'>
                  &nbsp;&nbsp;✉️
                  </span>
                </button>
              </span>
            </p>
          </div>
          <span style={{ display: this.state.loaded ? 'block' : 'none' }}>
            {newLine} Hello! <span role='img' className='logos' aria-label='guy'>👋🏻</span>
            {newLine}
            {' '}
            My name is
            {' '}
            <strong>Erkan Sen</strong>
            {' '}
            <span role='img' className='logos' aria-label='guy'>🙋🏻‍♂️</span>
            . I am a
            {' '}
            <strong>developer</strong>
            {' '}
            <span role='img' className='logos' aria-label='guy'>👨🏻‍💻</span>
            {' '}
            from <strong>Houston, Texas</strong>
            {' '}
            who loves using Javascript!
            {' '}
            <FontAwesomeIcon icon={faJsSquare} id='jslogo'/>
            {newLine} Here is what I spend my time doing:
            <br />
            {' '}
            <span className='projectButtonContainer'>
              <button className='projectButton'>
                <strong className='terminalLinks'>Projects</strong>
                {' '}
                <span role='img' className='logos' aria-label='laptop'>
                  &nbsp;💻
                </span>
              </button>
              <button className='projectButton'>
                <strong className='terminalLinks'>
                  &nbsp;&nbsp;&nbsp;&nbsp;Blog&nbsp;&nbsp;&nbsp;&nbsp;
                </strong>
                {' '}
                <span role='img' className='logos' aria-label='newspaper'>
                  &nbsp;📰
                </span>
              </button>
            </span>
            <br />
            {' '}
            <span className='projectButtonContainer'>
              <button className='projectButton'>
                <strong className='terminalLinks'>Resume</strong>
                {' '}
                <span role='img' className='logos' aria-label='clipboard'>
                  &nbsp;&nbsp;📋
                </span>
              </button>
              <button className='projectButton'>
                <strong className='terminalLinks'>Contact</strong>
                {' '}
                <span role='img' className='logos' aria-label='mail'>
                  &nbsp;&nbsp;✉️
                </span>
              </button>
            </span>
          </span>
          <span id='typed' />
        </div>
      </div>
    );
  }
}
