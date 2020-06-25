import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Row, Col, Card, Layout, Typography } from 'antd'

function App() {
  const { Header, Footer, Content, Sider } = Layout
  const { Title, Text } = Typography
  return (
    <div>
        <Header>
          <Title style={{color:'white', textAlign:'center'}}>Covid-19 Tracker App</Title>
        </Header>
        <Content>
          <Title level={2}>My App</Title>
          <div className="site-card-wrapper">
            <Row gutter={16}>
              <Col span={8}>
                <Card title="Country" bordered={true}>
                  Pakistan
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Positive Cases" bordered={true}>
                  170,000
                </Card>
              </Col>
              <Col span={8}>
                <Card title="# of Deaths" bordered={true}>
                  5,000
                </Card>
              </Col>
            </Row>
        </div>
        </Content>
        <Footer>copyright 2020</Footer>
    </div>
  );
}

export default App;
