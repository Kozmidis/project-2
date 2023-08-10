import styles from "../IconContainer/IconContainer.module.css";

import {
  UserOutlined,
  BellFilled,
  QuestionCircleFilled,
} from "@ant-design/icons";
import { Avatar, Badge, Row, Col } from "antd";

export const IconContainer = () => {
  return (
    <div className={styles.iconContainer}>
      <QuestionCircleFilled
        style={{
          color: "#c7c7c7",
          fontSize: "23px",
        }}
      />
      <Badge size="small" count={5}>
        <BellFilled
          style={{
            color: "#c7c7c7",
            fontSize: "23px",
          }}
        />
      </Badge>
      <Avatar size={23} icon={<UserOutlined />} />
    </div>
  );
};
