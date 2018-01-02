import React from 'react';

import Terminal from './components/Terminal';
import Projects from './components/Projects';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Resume from './components/Resume';

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

  handleClick = (name) => {
    this.setState({ content: name });
  };

  render() {
    const Comp = components[this.state.content];
    return (
      <div className='App'>
        <Terminal handleClick={this.handleClick} content={this.state.content} />
        <div
          id='content'
          style={{
            height: this.state.content ? '80%' : 0,
          }}
        >
          <h1>{this.state.content}</h1>
          {this.state.content && (<Comp />)}
        </div>
        <div id='footer'>
          <p>Made with <span role='img' aria-label='heart'>❤️</span> in Houston</p>
        </div>
      </div>
    );
  }
}
