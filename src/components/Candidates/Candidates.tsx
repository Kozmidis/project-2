"use client";
import React, { FC, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Avatar, List } from "antd";
import { SwapOutlined } from "@ant-design/icons";
import { FilterFilled } from "@ant-design/icons";
import { Button, Dropdown, DatePicker, Checkbox } from "antd";
import type { MenuProps } from "antd";
import type { CheckboxValueType } from "antd/es/checkbox/Group";

const CheckboxGroup = Checkbox.Group;

const plainOptions = ["Male", "Female"];
const defaultCheckedList = ["Male", "Female"];

const Candidates: FC = () => {
  const position = "bottom";
  const align = "center";

  function getAge(dateString: string) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  const [open, setOpen] = useState(false);

  async function api() {
    await fetch(
      `https://fakerapi.it/api/v1/persons?_quantity=50&_birthday_start=1980-01-01&_birthday_end=2000-01-01&_gender=&_locale=fr_FR`
    ).then(async (res) => {
      const data = await res.json();
      console.log(data.data);
      setApiState(data.data);
    });
  }
  const [apiState, setApiState] = useState([]);
  useEffect(() => {
    api();
  }, []);

  //Date
  const { RangePicker } = DatePicker;

  //Фильтр ЧЕКБОКСЫ
  const [checkedList, setCheckedList] =
    useState<CheckboxValueType[]>(defaultCheckedList);

  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
    api();
  };

  const items: MenuProps["items"] = [
    {
      label: (
        <>
          <h3 style={{ textAlign: "center", paddingBottom: 5 }}>Gender</h3>
          <CheckboxGroup
            style={{ display: "flex", justifyContent: "center" }}
            options={plainOptions}
            value={checkedList}
            onChange={onChange}
          />
        </>
      ),
      key: "0",
    },
    {
      type: "divider",
    },
    {
      label: (
        <>
          <h3 style={{ textAlign: "center", paddingBottom: 5 }}>Dates</h3>
          <RangePicker
            onChange={(e) => {
              console.log(e);
            }}
          />
        </>
      ),
      key: "1",
    },
  ];

  const handleMenuClick: MenuProps["onClick"] = (e) => {
    if (e.key === "2") {
      setOpen(false);
    }
  };
  const handleOpenChange = (flag: boolean) => {
    setOpen(flag);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: 30,
        }}
      >
        <div>
          <h2
            style={{
              fontSize: 21,
            }}
          >
            Candidates
          </h2>
          <p
            style={{
              color: "#aaaaaa",
              letterSpacing: "0.5px",
              marginTop: 8,
              fontSize: 17,
            }}
          >
            Total Candidates
          </p>
        </div>
        <Dropdown
          menu={{
            items,
            onClick: handleMenuClick,
          }}
          onOpenChange={handleOpenChange}
          open={open}
        >
          {/* <a onClick={(e) => e.preventDefault()}> */}
          <Button
            style={{ color: "#aaaaaa" }}
            icon={<FilterFilled style={{ color: "#aaaaaa" }} />}
          >
            Filter
          </Button>
          {/* </a> */}
        </Dropdown>
      </div>

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
        dataSource={apiState}
        renderItem={(item: any, index) => (
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
                    Age:{" "}
                    <span style={{ fontWeight: "bold", color: "black" }}>
                      {getAge(item.birthday)}
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
};
function mapStateToProps({ candidates }: any) {
  console.log("CandidatesmapStateToProps >", candidates);
  return { candidates };
}

export default connect(mapStateToProps)(Candidates);
