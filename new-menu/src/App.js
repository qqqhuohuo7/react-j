import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// import Button from 'antd/lib/button';
import { Button } from 'antd';
import 'antd/lib/button/style/css'; // 或者 antd/lib/button/style/css 加载 css 文件

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Button>Button</Button>
      </div>
    );
  }
}

export default App;
