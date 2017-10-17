import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../asset/css/App.css';
import { Layout, Menu, Icon } from 'antd';
import Content from './content';
import AllMenu from '../utils/menu';
const SubMenu = Menu.SubMenu;
const { Header, Sider } = Layout;

class App extends Component {
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      current: 'top1',
      siderMenu: AllMenu['top1']
    };
  };
  handleClick(e){
    this.setState({
      current: e.key,
      siderMenu: AllMenu[e.key]
    }, function(){
      window.location.hash = ''
    });
  }
  render() {
    return (
      <Layout style={{height: '100%'}}>
        <Header style={{ height: '50px' }}>
          <div className="logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            style={{ lineHeight: '50px' }}
          >
            <Menu.Item key="top1"><Icon type="appstore" />nav 1</Menu.Item>
            <Menu.Item key="top2"><Icon type="mail" />nav 2</Menu.Item>
            <Menu.Item key="top3"><Icon type="setting" />nav 3</Menu.Item>
          </Menu>
        </Header>
        <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              style={{ height: '100%', borderRight: 0 }}
            >
              {
                this.state.siderMenu.map((subMenu) => {
                  if (subMenu.children && subMenu.children.length) {
                    return (
                      <SubMenu key={subMenu.url} title={<span>{subMenu.name}</span>}>
                        {subMenu.children.map(menu => (
                          <Menu.Item key={menu.url}>
                            <Link to={`/${menu.url}`}>{menu.name}</Link>
                          </Menu.Item>
                        ))}
                      </SubMenu>
                    )
                  }
                  return (
                    <Menu.Item key={subMenu.url}>
                      <Link to={`/${subMenu.url}`}>{subMenu.name}</Link>
                    </Menu.Item>
                  )
                })
              }
            </Menu>
          </Sider>
          <Layout>
            <Content/>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}

export default App;

/* <div style={{width: '100%', height: '100%'}}>
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
          </div> */