import { Input, Row, Col } from "antd";
import styles from "../HeaderApp/HeaderApp.module.css";

export const HeaderApp = () => {
  const { Search } = Input;

  const onSearch = (value: string) => console.log(value);
  return (
    <>
      <Row>
        <Col span={16}>
          <h2 className={styles.text}>Dashboard</h2>
        </Col>
        <Col span={8}>
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
