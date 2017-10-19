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
      current: '0',
      siderMenu: AllMenu[0]
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
            <Menu.Item key="0"><Icon type="appstore" />nav 1</Menu.Item>
            <Menu.Item key="1"><Icon type="mail" />nav 2</Menu.Item>
            <Menu.Item key="2"><Icon type="setting" />nav 3</Menu.Item>
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
