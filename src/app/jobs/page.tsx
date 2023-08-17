"use client";
import React from "react";
import { DownOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "antd";
import store from "@/Redux/store/store";
import Cards from "@/Redux/Cards";

const Jobs = () => {
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
      <Cards store={store}></Cards>
    </>
  );
};
export default Jobs;
