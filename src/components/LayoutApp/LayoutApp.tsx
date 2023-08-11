"use client";
import React from "react";
import { Layout, Row, Col } from "antd";
import MenuApp from "@/components/MenuApp/MenuApp";
import { ProfileBar } from "@/components/ProfileBar/ProfileBar";
import { HeaderApp } from "@/components/HeaderApp/HeaderApp";
import { usePathname } from "next/navigation";
import { ProviderStore } from "@/Redux/Store/ProviderStore";

const { Header, Content } = Layout;

export default function LayoutApp({ children }: { children: React.ReactNode }) {
  const pathName = usePathname();
  const headerStyle: React.CSSProperties = {
    height: "max-content",
    paddingInline: 50,
    padding: 15,
    lineHeight: "64px",
    width: "100%",
    backgroundColor: pathName === "/dashboard" ? "#f5f5f5" : "#fff",
    minHeight: "88px",
  };

  return (
    <Layout>
      <Row>
        <Col span={4}>
          <MenuApp pathName={pathName} />
        </Col>
        <Col span={pathName === "/dashboard" ? 16 : 20}>
          <Layout>
            <Header style={headerStyle}>
              <HeaderApp pathName={pathName} />
            </Header>
            <Content style={{ padding: "20px" }}>
              <ProviderStore>{children}</ProviderStore>
            </Content>
          </Layout>
        </Col>
        {pathName === "/dashboard" && (
          <Col span={4}>
            <ProfileBar />
          </Col>
        )}
      </Row>
    </Layout>
  );
}
