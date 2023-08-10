"use client";
import React from "react";
import { Layout, Row, Avatar, Col, Card } from "antd";
import MenuApp from "@/components/MenuApp/MenuApp";
import styles from "../app/page.module.css";
import { Dashboard } from "@/components/Dashboard/Dashboard";
import { ProfileBar } from "@/components/ProfileBar/ProfileBar";
import { HeaderApp } from "@/components/HeaderApp/HeaderApp";

const { Header, Content } = Layout;

const headerStyle: React.CSSProperties = {
  height: "max-content",
  paddingInline: 50,
  padding: 15,
  lineHeight: "64px",
  width: "100%",
  backgroundColor: "#f5f5f5",
};

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
              <HeaderApp />
            </Header>
            <Content style={{ padding: "20px" }}>
              <Dashboard />
            </Content>
          </Layout>
        </Col>
        <Col span={4}>
          <ProfileBar />
        </Col>
      </Row>
    </Layout>
  );
}
