"use client";
import React from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps, TabsProps } from "antd";
import { Dropdown, Space, Tabs, Tag } from "antd";
import store from "@/Redux/store/store";
import Cards from "@/Redux/Cards";

const Jobs = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const itemsTabs: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <div style={{ display: "flex", gap: 4 }}>
          <p>Active jobs</p>
          <Tag color="blue">07</Tag>
        </div>
      ),
      children: <Cards store={store}></Cards>,
    },
    {
      key: "2",
      label: (
        <div style={{ display: "flex", gap: 4 }}>
          <p>Completed</p>
          <Tag color="blue">57</Tag>
        </div>
      ),
      children: <Cards store={store}></Cards>,
    },
    {
      key: "3",
      label: (
        <div style={{ display: "flex", gap: 4 }}>
          <p>Unfinished</p>
          <Tag color="blue">32</Tag>
        </div>
      ),
      children: <Cards store={store}></Cards>,
    },
  ];

  const items: MenuProps["items"] = [
    {
      label: <a href="https://www.antgroup.com">All Status</a>,
      key: "0",
    },
    {
      label: <a href="https://www.aliyun.com">2nd menu item</a>,
      key: "1",
    },
    {
      type: "divider",
    },
    {
      label: "3rd menu item",
      key: "3",
    },
  ];

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Jobs</h2>
        <Dropdown menu={{ items }} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <p style={{ color: "#a0a0a0", fontWeight: "500" }}>Status:</p>
              All Status
              <DownOutlined />
            </Space>
          </a>
        </Dropdown>
      </div>

      <Tabs defaultActiveKey="1" items={itemsTabs} onChange={onChange} />
    </>
  );
};
export default Jobs;
