import React, {Component} from 'react';

import {CodeViewWrapper, CodeFileTabs, CodeView} from './components/codeView';
import {GraphViewWrapper} from './components/graphView';
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
    <div className="App-body wrap">
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
          <CodeViewWrapper className="left-pane">
            <CodeFileTabs/>
            <CodeView/>
          </CodeViewWrapper>
          <GraphViewWrapper className="right-pane"/>
        </BodyWrapper>
      </div>
    );
  }
}

export default App;
