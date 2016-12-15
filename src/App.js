import React, {Component} from 'react';

import {CodeView} from './components/codeView';

import './App.css'

class Heading extends Component {
  render() {
    return (
      <div className="App-header">
        <h2>MVP: Dependency navigator</h2>
      </div>
    )
  }
}


function BodyWrapper(props) {
  return (
    <div className="App-body">
      {props.children}
    </div>
  )
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <Heading/>
        <BodyWrapper>
          <CodeView/>
        </BodyWrapper>
      </div>
    );
  }
}

export default App;
