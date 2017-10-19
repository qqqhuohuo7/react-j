import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu, Icon } from 'antd';
import 'asset/css/App.css';
import Content from './content';
import AllMenu from 'utils/menu';
import Utils from 'utils/';

const { SubMenu } = Menu.SubMenu;
const { Header, Sider } = Layout;

class App extends Component {
  constructor(props){
    super(props);
    this.toHome = this.toHome.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSiderClick = this.handleSiderClick.bind(this);
    this.state = {
      current: '0',
      siderCurrent: null,
      siderMenu: AllMenu[0]
    };
  };
  handleClick(e){
    this.setState({
      current: e.key,
      siderCurrent: null,
      siderMenu: AllMenu[e.key],
    }, Utils.clearHash);
  }
  handleSiderClick(e){
    this.setState({
      siderCurrent: e.key,
    })
  }
  toHome(){
    Utils.clearHash();
    this.setState({
      siderCurrent: null
    })
  }
  render() {
    return (
      <Layout className='app-layout'>
        <Header className='ly-header'>
          <div className="logo" onClick={this.toHome}><Icon type="home" />home </div>
          <Menu
            theme="dark"
            mode="horizontal"
            onClick={this.handleClick}
            selectedKeys={[this.state.current]}
            className='nav-menu'
          >
            <Menu.Item key="0"><Icon type="appstore" />nav 1</Menu.Item>
            <Menu.Item key="1"><Icon type="mail" />nav 2</Menu.Item>
            <Menu.Item key="2"><Icon type="setting" />nav 3</Menu.Item>
          </Menu>
        </Header>
        <Layout className='ly-layout'>
          <Sider width={200} className='ly-sider'>
            <Menu
              mode="inline"
              selectedKeys={[this.state.siderCurrent]}
              onClick={this.handleSiderClick}
              className='sider-menu'
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