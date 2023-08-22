"use client";
import React from "react";
import { Avatar, List } from "antd";
import { SwapOutlined } from "@ant-design/icons";

export default function Candidates({ data }) {
  const position = "bottom";
  const align = "center";

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          alignContent: "center",
          width: "100%",
          height: 50,
          backgroundColor: "#fff",
          borderRadius: 21,
          marginBottom: 30,
        }}
      >
        <div
          style={{
            cursor: "pointer",
            width: "100%",
            textAlign: "center",
            borderRight: "1px solid #b3b3b3",
          }}
        >
          Name <SwapOutlined rotate={90} />
        </div>
        <div
          style={{
            cursor: "pointer",
            width: "100%",
            textAlign: "center",
            borderRight: "1px solid #b3b3b3",
          }}
        >
          Date <SwapOutlined rotate={90} />
        </div>
        <div style={{ cursor: "pointer", width: "100%", textAlign: "center" }}>
          Gender <SwapOutlined rotate={90} />
        </div>
      </div>
      <List
        style={{
          backgroundColor: "#fff",
          borderRadius: "20px",
          padding: "20px",
        }}
        pagination={{
          position,
          align,
          pageSize: 5,
        }}
        dataSource={data}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              style={{ display: "flex", alignItems: "center" }}
              avatar={
                <Avatar
                  src={`https://xsgames.co/randomusers/avatar.php?g=${item.gender}&key=${index}`}
                />
              }
              title={
                <a href="https://ant.design">
                  {item.firstname} {item.lastname}
                </a>
              }
              description={
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr",
                  }}
                >
                  <p>
                    City:{" "}
                    <span style={{ fontWeight: "bold", color: "black" }}>
                      {item.address.city}
                    </span>
                  </p>
                  <p>
                    Birthday:{" "}
                    <span style={{ fontWeight: "bold", color: "black" }}>
                      {item.birthday}
                    </span>
                  </p>
                  <p>
                    Gender:{" "}
                    <span style={{ fontWeight: "bold", color: "black" }}>
                      {item.gender}
                    </span>
                  </p>
                </div>
              }
            />
          </List.Item>
        )}
      />
    </>
  );
}
