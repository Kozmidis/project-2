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
      <Row gutter={[5, 5]}>
        <Col span={8}>
          <QuestionCircleFilled
            style={{
              color: "#c7c7c7",
              fontSize: "23px",
            }}
          />
        </Col>
        <Col span={8}>
          <Badge size="small" count={5}>
            <BellFilled
              style={{
                color: "#c7c7c7",
                fontSize: "23px",
              }}
            />
          </Badge>
        </Col>
        <Col span={8}>
          <Avatar size={23} icon={<UserOutlined />} />
        </Col>
      </Row>
    </div>
  );
};
