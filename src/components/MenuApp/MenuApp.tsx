import React from "react";
import {
  AppstoreFilled,
  HomeFilled,
  MessageFilled,
  CalendarFilled,
  WalletFilled,
  MehFilled,
  SignalFilled,
  FolderOpenFilled,
  SettingFilled,
  SnippetsFilled,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps["items"] = [
  getItem("Human R", "sub1", <HomeFilled />, [
    getItem(
      "MENU",
      "g1",
      null,
      [
        getItem("Dashboard", "1", <AppstoreFilled />),
        getItem("Message", "2", <MessageFilled />),
        getItem("Calendar", "3", <CalendarFilled />),
      ],
      "group"
    ),
    getItem(
      "RECRUITMENT",
      "g2",
      null,
      [
        getItem("Jobs", "4", <WalletFilled />),
        getItem("Cadidates", "5", <MehFilled />),
        getItem("My Referals", "6", <SignalFilled />),
        getItem("Career Site", "7", <FolderOpenFilled />),
      ],
      "group"
    ),
    getItem(
      "ORGANIZATION",
      "g3",
      null,
      [
        getItem("Employee", "8", <MehFilled />),
        getItem("Structure", "9", <SignalFilled />),
        getItem("Report", "10", <SnippetsFilled />),
        getItem("Settings", "11", <SettingFilled />),
      ],
      "group"
    ),
  ]),
];

const MenuApp: React.FC = () => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: "100%" }}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  );
};

export default MenuApp;
