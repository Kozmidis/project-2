"use client";
import React, { useState, useEffect } from "react";
import Candidates from "@/components/Candidates/Candidates";
import { FilterFilled } from "@ant-design/icons";
import { Button, Dropdown, DatePicker, Checkbox } from "antd";
import type { MenuProps } from "antd";
import type { CheckboxValueType } from "antd/es/checkbox/Group";

const CheckboxGroup = Checkbox.Group;

const plainOptions = ["Male", "Female"];
const defaultCheckedList = ["Male", "Female"];

export default function CandidatesPage() {
  const [open, setOpen] = useState(false);

  const [apiState, setApiState] = useState([]);
  useEffect(() => {
    async function api() {
      await fetch(
        `https://fakerapi.it/api/v1/persons?_gender=&_locale=fr_FR`
      ).then(async (res) => {
        const data = await res.json();
        console.log(data.data);
        setApiState(data.data);
      });
    }
    api();
  }, []);

  //Date
  const { RangePicker } = DatePicker;

  //Фильтр ЧЕКБОКСЫ
  const [checkedList, setCheckedList] =
    useState<CheckboxValueType[]>(defaultCheckedList);

  const onChange = (list: CheckboxValueType[]) => {
    setCheckedList(list);
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
          <RangePicker />
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
    <div style={{ paddingBottom: 177 }}>
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

      <Candidates data={apiState} />
    </div>
  );
}
