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
import Link from "next/link";

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
        getItem(
          <Link href="/dashboard">Dashboard</Link>,
          "/dashboard",
          <AppstoreFilled />
        ),
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
        getItem(<Link href="/jobs">Jobs</Link>, "/jobs", <WalletFilled />),
        getItem(
          <Link href="/candidates">Candidates</Link>,
          "/candidates",
          <MehFilled />
        ),
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

type MenuAppProps = {
  pathName: string;
};

const MenuApp: React.FC<MenuAppProps> = ({ pathName }) => {
  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
  };

  return (
    <Menu
      onClick={onClick}
      style={{ width: "100%" }}
      defaultSelectedKeys={[pathName]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      items={items}
    />
  );
};

export default MenuApp;
