import React, {Component} from 'react';

import {CodeViewWrapper, CodeFileTabs, CodeView} from './components/codeView/codeView';
import {GraphViewWrapper} from './components/graphView/graphView';
import {NavBar} from './components/navBar';
import './App.css'

class Heading extends Component {
  constructor(props){
    super(props);
    this.props = props;
  }

  render() {
    return (
      <div className="App-header">
        <h2>MVP: Dependency navigator</h2>
        {this.props.children}
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
        <Heading>
          <NavBar/>
        </Heading>
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