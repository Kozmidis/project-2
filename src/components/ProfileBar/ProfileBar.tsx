import styles from "../ProfileBar/ProfileBar.module.css";

import { UserOutlined } from "@ant-design/icons";
import { Avatar, Card } from "antd";

export const ProfileBar = () => {
  const { Meta } = Card;
  return (
    <>
      <div className={styles.profileBar}>
        <Avatar size={64} icon={<UserOutlined />} />
        <h2 className={styles.profileBarItem}>User</h2>
        <p>directory...</p>
        <h3 className={styles.profileBarTitle}>Messages</h3>
        <Card style={{ width: "100%" }} size="small" bordered={false}>
          <Meta
            avatar={
              <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
            }
            title="Liana Row"
            description="Hello?"
          ></Meta>
        </Card>
        <Card style={{ width: "100%" }} size="small" bordered={false}>
          <Meta
            avatar={
              <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
            }
            title="Alex Down"
            description="XDDDDDD"
          ></Meta>
        </Card>
        <h3 className={styles.profileTitle}>Recent added jobs</h3>
        <Card style={{ width: "100%" }} size="small" bordered={false}>
          <Meta
            avatar={
              <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
            }
            title="ADA"
            description="sda"
          ></Meta>
        </Card>
        <Card style={{ width: "100%" }} size="small" bordered={false}>
          <Meta
            avatar={
              <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
            }
            title="ADA"
            description="sda"
          ></Meta>
        </Card>
        <Card style={{ width: "100%" }} size="small" bordered={false}>
          <Meta
            avatar={
              <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />
            }
            title="ADA"
            description="sda"
          ></Meta>
        </Card>
      </div>
    </>
  );
};
