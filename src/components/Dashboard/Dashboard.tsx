"use client";
import React from "react";
import { ArrowUpOutlined, MoreOutlined } from "@ant-design/icons";
import {
  Select,
  Progress,
  Statistic,
  Row,
  Col,
  Card,
  List,
  Avatar,
  Tag,
} from "antd";
import styles from "../Dashboard/Dashboard.module.css";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export const Dashboard = () => {
  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  const ListData = [
    {
      title: "Jhon Stiv",
    },
    {
      title: "Mark Andry",
    },
    {
      title: "Bill Bros",
    },
    {
      title: "Lay Bronson",
    },
  ];

  const CalendarData = [
    {
      title: "Interview",
      day: "10",
    },
    {
      title: "Organizational meeting",
      day: "08",
    },
    {
      title: "Meeting with the manager",
      day: "11",
    },
  ];

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
      <div style={{ marginTop: "25px" }}>
        <Row gutter={[30, 0]}>
          <Col span={14}>
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
              <List
                style={{ marginTop: 20 }}
                size="small"
                itemLayout="horizontal"
                dataSource={ListData}
                renderItem={(item, index) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <Avatar
                          src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`}
                        />
                      }
                      title={<a href="https://ant.design">{item.title}</a>}
                      description="Что-то там сделал, но что не ясно"
                    />
                    <Tag color="blue">Applying</Tag>
                  </List.Item>
                )}
              />
            </Card>
          </Col>
          <Col span={10}>
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
              <List
                style={{ marginTop: 20 }}
                size="small"
                itemLayout="horizontal"
                dataSource={CalendarData}
                renderItem={(item, index) => (
                  <List.Item>
                    <List.Item.Meta
                      avatar={
                        <div
                          style={{
                            textAlign: "center",
                            fontWeight: "bold",
                            boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.1)",
                            borderRadius: "5px",
                            height: 40,
                            width: 40,
                          }}
                        >
                          <h4 style={{ color: "#f0b71c" }}>Feb</h4>
                          <p>{item.day}</p>
                        </div>
                      }
                      title={<a href="https://ant.design">{item.title}</a>}
                      description="9:00 am - 11:30 am"
                    />
                    <MoreOutlined
                      style={{
                        cursor: "pointer",
                        fontSize: 25,
                        backgroundColor: "#f3f3f3ed",
                        color: "#797979",
                        borderRadius: "5px",
                      }}
                    />
                  </List.Item>
                )}
              />
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};
