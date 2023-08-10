import { Input, Row, Col } from "antd";
import styles from "../HeaderApp/HeaderApp.module.css";
import { IconContainer } from "../IconContainer/IconContainer";

export const HeaderApp = ({ pathName }: { pathName: string }) => {
  const { Search } = Input;

  const onSearch = (value: string) => console.log(value);
  return (
    <>
      <Row>
        <Col
          style={{
            display: "flex",
            justifyItems: "center",
            flexDirection: "column",
          }}
          span={12}
        >
          {pathName === "/dashboard" && (
            <>
              <h2 className={styles.text}>Dashboard</h2>
              <p className={styles.text}>Hello, User! Welcome to Galucter</p>
            </>
          )}
        </Col>
        <Col
          style={{
            display: "flex",
            alignItems: "center",
          }}
          span={12}
        >
          <Search
            placeholder="Search by anything"
            onSearch={onSearch}
            enterButton
          />
          {pathName !== "/dashboard" && <IconContainer />}
        </Col>
      </Row>
    </>
  );
};
