import { Input, Row, Col } from "antd";
import styles from "../HeaderApp/HeaderApp.module.css";

export const HeaderApp = () => {
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
          span={16}
        >
          <h2 className={styles.text}>Dashboard</h2>
          <p className={styles.text}>Hello, User! Welcome to Galucter</p>
        </Col>
        <Col style={{ display: "flex", alignItems: "center" }} span={8}>
          <Search
            placeholder="Search by anything"
            onSearch={onSearch}
            enterButton
          />
        </Col>
      </Row>
    </>
  );
};
