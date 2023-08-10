import styles from "../ProfileBar/ProfileBar.module.css";

import {
  UserOutlined,
  SkypeFilled,
  CodepenSquareFilled,
  YoutubeFilled,
  GithubFilled,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import { IconContainer } from "../IconContainer/IconContainer";

const cardStyle: React.CSSProperties = {
  width: "100%",
  backgroundColor: "#ececec",
  margin: "4px 0",
};

export const ProfileBar = () => {
  const { Meta } = Card;
  return (
    <>
      <div className={styles.profileBar}>
        <IconContainer />
        <Avatar size={64} icon={<UserOutlined />} />
        <h2 className={styles.profileBarItem}>User</h2>
        <p>directory...</p>
        <h3 className={styles.profileBarTitle}>Messages</h3>
        <Card style={cardStyle} size="small" bordered={false}>
          <Meta
            avatar={
              <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
            }
            title="Liana Row"
            description="Hello?"
          ></Meta>
        </Card>
        <Card style={cardStyle} size="small" bordered={false}>
          <Meta
            avatar={
              <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
            }
            title="Alex Down"
            description="XDDDDDD"
          ></Meta>
        </Card>
        <h3 className={styles.profileBarTitle}>Recent added jobs</h3>
        <Card style={cardStyle} size="small" bordered={false}>
          <Meta
            style={{ display: "flex", alignItems: "center" }}
            avatar={<SkypeFilled style={{ fontSize: 30, color: "#386ed1" }} />}
            title="Skype"
            description="description"
          ></Meta>
        </Card>
        <Card style={cardStyle} size="small" bordered={false}>
          <Meta
            style={{ display: "flex", alignItems: "center" }}
            avatar={<CodepenSquareFilled style={{ fontSize: 30 }} />}
            title="CodePan"
            description="description"
          ></Meta>
        </Card>
        <Card style={cardStyle} size="small" bordered={false}>
          <Meta
            style={{ display: "flex", alignItems: "center" }}
            avatar={
              <YoutubeFilled style={{ fontSize: 30, color: "#d13838" }} />
            }
            title="Youtube"
            description="description"
          ></Meta>
        </Card>
        <Card style={cardStyle} size="small" bordered={false}>
          <Meta
            style={{ display: "flex", alignItems: "center" }}
            avatar={<GithubFilled style={{ fontSize: 30 }} />}
            title="Github"
            description="description"
          ></Meta>
        </Card>
      </div>
    </>
  );
};
