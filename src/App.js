import React, {Component} from 'react';

import {CodeViewWrapper, CodeView} from './components/codeView/codeView';
import {CodeFileTabs} from './containers/codeFileTabs/codeFileTabs';
import {GraphViewWrapper} from './components/graphView/graphView';
import {CodeTokens} from './containers/codeTokens/codeTokens';
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
            <CodeView>
              <CodeTokens />
            </CodeView>
          </CodeViewWrapper>
          <GraphViewWrapper className="right-pane"/>
        </BodyWrapper>
      </div>
    );
  }
}

export default App;
