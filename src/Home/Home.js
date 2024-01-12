import React, { useState } from 'react';
// import { TodoInput  } from '../TodoWork';

import {TodoWork} from '../TodoWork';
import './Home.css'
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const {  Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
const items = [
  getItem('Option 1', '1', <PieChartOutlined />),
  getItem('Option 2', '2', <DesktopOutlined />),
  getItem('User', 'sub1', <UserOutlined />, [
    getItem('Tom', '3'),
    getItem('Bill', '4'),
    getItem('Alex', '5'),
  ]),
  getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
  getItem('Files', '9', <FileOutlined />),
];
const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
      <div className='header' backgroundColor={colorBgContainer}>
              <h1> My Task List </h1>
     
            </div>
        
        <Content
          style={{
            margin: '0 16px',
            // margin: ' 16px 0',

          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            
            <Breadcrumb.Item>
                    
            </Breadcrumb.Item>
            <Breadcrumb.Item></Breadcrumb.Item>
          </Breadcrumb>
          
          <div
            style={{
              padding: 24,
              minHeight: 360,
              // background: colorBgContainer,
              background: '#cccc',

              borderRadius: borderRadiusLG,
            }}
          >
         
            <TodoWork/>
            <div>
          </div>
          </div>
        
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          {/* Ant Design ©{new Date().getFullYear()} Created by Ant UED */}
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;