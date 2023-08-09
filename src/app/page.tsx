"use client";
import React from "react";
import { AudioOutlined } from "@ant-design/icons";
import { Layout, Input, Row, Space, Col } from "antd";
import MenuApp from "@/components/MenuApp/MenuApp";
import styles from "../app/page.module.css";

const { Header, Footer, Content } = Layout;

const headerStyle: React.CSSProperties = {
  textAlign: "center",
  height: 64,
  paddingInline: 50,
  padding: 15,
  lineHeight: "64px",
};

const { Search } = Input;

const onSearch = (value: string) => console.log(value);

export default function App() {
  return (
    <Layout>
      <Row>
        <Col span={4}>
          <MenuApp />
        </Col>
        <Col span={16}>
          <Layout>
            <Header style={headerStyle}>
              <Row>
                <Col span={16}>Header</Col>
                <Col span={8}>
                  <Search
                    placeholder="input search text"
                    onSearch={onSearch}
                    enterButton
                  />
                </Col>
              </Row>
            </Header>
            <Content>Content</Content>
            <Footer>Footer</Footer>
          </Layout>
        </Col>
        <Col span={4}>
          <div className={styles.sideBar}></div>
        </Col>
      </Row>
    </Layout>
  );
}
