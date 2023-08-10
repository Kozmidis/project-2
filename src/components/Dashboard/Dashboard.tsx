import React from "react";
import { ArrowUpOutlined } from "@ant-design/icons";
import { Select, Progress, Statistic, Row, Col, Card } from "antd";
import styles from "../Dashboard/Dashboard.module.css";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export const Dashboard = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "Statistics of active Applications",
      align: "left",
    },
    xAxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "July",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      crosshair: true,
      accessibility: {
        description: "Countries",
      },
    },
    yAxis: {
      title: {
        text: "%",
      },
      categoris: ["20%", "40%", "60%", "80%", "90%", "100%"],
      crosshair: true,
      accessibility: {
        description: "proc",
      },
    },

    tooltip: {
      valueSuffix: " (100%   MT)",
    },
    plotOptions: {
      column: {
        pointPadding: 0.2,
        borderWidth: 0,
      },
    },
    series: [
      {
        name: "Applications",
        data: [
          406292, 260000, 107000, 68300, 27500, 14500, 406292, 260000, 107000,
          68300, 27500, 14500,
        ],
      },
      {
        name: "Shortlisted",
        data: [
          51086, 136000, 5500, 141000, 107180, 77000, 51086, 136000, 5500,
          141000, 107180, 77000,
        ],
      },
    ],
  };
  return (
    <>
      <div className={styles.cardGrid}>
        <Card style={{ width: 300, marginRight: "10px" }}>
          <Row>
            <Col span={14}>
              <Statistic title="Total Aplictation" value={"5672"} />
              <Statistic
                value={14}
                valueStyle={{ color: "#75cf27" }}
                prefix={<ArrowUpOutlined />}
                suffix="% Inc"
              />
            </Col>
            <Col span={10}>
              <div className={styles.progressContainer}>
                <Progress
                  type="circle"
                  percent={74}
                  strokeColor="#75cf27"
                  format={(percent) => `+${percent}%`}
                  size="small"
                />
              </div>
            </Col>
          </Row>
        </Card>
        <Card style={{ width: 300, marginRight: "10px" }}>
          <Row>
            <Col span={14}>
              <Statistic title="Shotlisted Candidates" value={"3045"} />
              <Statistic
                value={14}
                valueStyle={{ color: "#ffaa2a" }}
                prefix={<ArrowUpOutlined />}
                suffix="% Inc"
              />
            </Col>
            <Col span={10}>
              <div className={styles.progressContainer}>
                <Progress
                  type="circle"
                  percent={74}
                  strokeColor="#ffaa2a"
                  format={(percent) => `+${percent}%`}
                  size="small"
                />
              </div>
            </Col>
          </Row>
        </Card>
        <Card style={{ width: 300, marginRight: "10px" }}>
          <Row>
            <Col span={14}>
              <Statistic title="Rejected Candidates" value={"1055"} />
              <Statistic
                value={14}
                valueStyle={{ color: "#db0707" }}
                prefix={<ArrowUpOutlined />}
                suffix="% Inc"
              />
            </Col>
            <Col span={10}>
              <div className={styles.progressContainer}>
                <Progress
                  type="circle"
                  percent={74}
                  strokeColor="#db0707"
                  format={(percent) => `+${percent}%`}
                  size="small"
                />
              </div>
            </Col>
          </Row>
        </Card>
      </div>
      <HighchartsReact highcharts={Highcharts} options={options} />
      <Row>
        <Col span={12}>
          <Card>
            <div className={styles.cardSelectCont}>
              <h3>Activity Feed</h3>
              <Select
                defaultValue="All Activity"
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                  { value: "All Activity", label: "All Activity" },
                  { value: "All Activity", label: "All Activity" },
                  { value: "Yiminghe", label: "yiminghe" },
                  {
                    value: "disabled",
                    label: "Disabled",
                    disabled: true,
                  },
                ]}
              />
            </div>
          </Card>
        </Col>
        <Col span={12}>
          <Card>
            <div className={styles.cardSelectCont}>
              <h3>Meetings</h3>
              <Select
                defaultValue="Create now"
                style={{ width: 120 }}
                onChange={handleChange}
                options={[
                  { value: "All Activity", label: "All Activity" },
                  { value: "All Activity", label: "All Activity" },
                  { value: "Yiminghe", label: "yiminghe" },
                  {
                    value: "disabled",
                    label: "Disabled",
                    disabled: true,
                  },
                ]}
              />
            </div>
          </Card>
        </Col>
      </Row>
    </>
  );
};
