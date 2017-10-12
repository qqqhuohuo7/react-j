import React, { Component } from 'react';
import './App.css';
import { Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

class App extends Component {
  constructor(props){
    super(props);
    this.onOpenChange = this.onOpenChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      openKeys: ['sub1'],
      current: 'mail'
    };
    this.rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
  };
  handleClick(e){
    // console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }
  onOpenChange(openKeys){
    const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : [],
      });
    }
  }
  render() {
    return (
      <div style={{width: '100%', height: '100%'}}>
        <Menu
          onClick={this.handleClick}
          selectedKeys={[this.state.current]}
          mode="horizontal"
          style={{ marginLeft: 240 }}
        >
          <Menu.Item key="mail">
            <Icon type="mail" />Navigation One
          </Menu.Item>
          <Menu.Item key="app">
            <Icon type="appstore" />Navigation Two
          </Menu.Item>
          <Menu.Item key="setting">
            <Icon type="setting" />Navigation Three
          </Menu.Item>
          <Menu.Item key="alipay">
            <Icon type="setting" />Navigation Four
            {/* <a href="https://ant.design" target="_blank" rel="noopener noreferrer">Navigation Four - Link</a> */}
          </Menu.Item>
        </Menu>
        <Menu
          mode="inline"
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          style={{ width: 240, height: '100%' }}
        >
          <SubMenu key="sub1" title={<span><Icon type="mail" /><span>Navigation One</span></span>}>
            <Menu.Item key="1">Option 1</Menu.Item>
            <Menu.Item key="2">Option 2</Menu.Item>
            <Menu.Item key="3">Option 3</Menu.Item>
            <Menu.Item key="4">Option 4</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
            <Menu.Item key="5">Option 5</Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="Submenu">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu key="sub4" title={<span><Icon type="setting" /><span>Navigation Three</span></span>}>
            <Menu.Item key="9">Option 9</Menu.Item>
            <Menu.Item key="10">Option 10</Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default App;
