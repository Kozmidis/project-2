"use client";
import React from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps, TabsProps } from "antd";
import { Dropdown, Space, Tabs } from "antd";

const Jobs = () => {
  const onChange = (key: string) => {
    console.log(key);
  };

  const itemsTabs: TabsProps["items"] = [
    {
      key: "1",
      label: `Active jobs`,
      children: `Content of Tab Pane 1`,
    },
    {
      key: "2",
      label: `Complited`,
      children: `Complited`,
    },
    {
      key: "3",
      label: `Unfinished`,
      children: `Content of Tab Pane 3`,
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
