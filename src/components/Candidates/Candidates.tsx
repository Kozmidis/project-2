"use client";
import React, { FC, useState, useEffect } from "react";
import { connect } from "react-redux";
import { Avatar, List } from "antd";
import { SwapOutlined } from "@ant-design/icons";
import { FilterFilled } from "@ant-design/icons";
import { Button, Dropdown, DatePicker, Checkbox } from "antd";
import type { MenuProps } from "antd";
import type { CheckboxValueType } from "antd/es/checkbox/Group";

interface ICandidates {
  id: number;
  firstname: string;
  lastname: string;
  birthday: string;
  gender: string;
  address: AddressType;
  image: string;
  age: string;
}

interface AddressType {
  id: number;
  city: string;
}

const prepareGenderForApi = (list: any) => {
  let gender = "";
  if (
    (list.includes("Male") && list.includes("Female")) ||
    (!list.includes("Male") && !list.includes("Female"))
  ) {
    gender = "";
  }
  if (list.includes("Male") && !list.includes("Female")) {
    gender = "male";
  }
  if (!list.includes("Male") && list.includes("Female")) {
    gender = "female";
  }
  return gender;
};

const CheckboxGroup = Checkbox.Group;

const plainOptions = ["Male", "Female"];
const Candidates: FC = ({
  saveItems,
  candidates,
  setFilterGender,
  setFilterDate,
  filter,
  sort,
  setSort,
}: any) => {
  const position = "bottom";
  const align = "center";

  console.log(candidates);

  const sortName = (candidates: any, sort: any) => {
    if (sort.name === "asc") {
      candidates.sort(function (a: any, b: any) {
        var textA = a.firstname.toUpperCase();
        var textB = b.firstname.toUpperCase();
        return textA < textB ? -1 : textA > textB ? 1 : 0;
      });
    }
    if (sort.name === "desc") {
      candidates.sort(function (a: any, b: any) {
        var textA = a.firstname.toUpperCase();
        var textB = b.firstname.toUpperCase();
        return textB < textA ? -1 : textB > textA ? 1 : 0;
      });
    }
  };
  const sortAge = (candidates: any, sort: any) => {
    if (sort.name === "asc") {
      candidates.sort(function (a: any, b: any) {
        return parseFloat(a.birthday) - parseFloat(b.birthday);
      });
    }
    if (sort.name === "desc") {
      candidates.sort(function (a: any, b: any) {
        return parseFloat(b.birthday) - parseFloat(a.birthday);
      });
    }
  };
  const sortGender = (candidates: any, sort: any) => {
    if (sort.name === "asc") {
      candidates.sort(function (a: any, b: any) {
        return a.gender.localeCompare(b.gender);
      });
    }
    if (sort.name === "desc") {
      candidates.sort(function (a: any, b: any) {
        return b.gender.localeCompare(a.gender);
      });
    }
  };
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

  function requestItems(filter: any) {
    return fetch(
      `https://fakerapi.it/api/v1/persons?_quantity=50&_birthday_start=${
        filter.date.before
      }&_birthday_end=${filter.date.after}&_gender=${prepareGenderForApi(
        filter.gender
      )}&_locale=fr_FR`
    ).then(async (res) => {
      const data = await res.json();
      return data.data;
    });
  }
  function requestAndSaveItems(filter: any) {
    requestItems(filter).then((items) => {
      saveItems(items);
    });
  }

  useEffect(() => {
    requestAndSaveItems(filter);
  }, [filter]);
  //Date
  const { RangePicker } = DatePicker;

  //Фильтр ЧЕКБОКСЫ

  const items: MenuProps["items"] = [
    {
      label: (
        <>
          <h3 style={{ textAlign: "center", paddingBottom: 5 }}>Gender</h3>
          <CheckboxGroup
            style={{ display: "flex", justifyContent: "center" }}
            options={plainOptions}
            value={filter.gender}
            onChange={setFilterGender}
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
            picker="year"
            onChange={(e) => {
              const dateBefore = new Date(e![0] as unknown as Date);
              let before =
                dateBefore.getFullYear() +
                "/" +
                dateBefore.getMonth() +
                "/" +
                dateBefore.getDate();

              const dateAfter = new Date(e![1] as unknown as Date);
              let after =
                dateAfter.getFullYear() +
                "/" +
                dateAfter.getMonth() +
                "/" +
                dateAfter.getDate();
              setFilterDate({ before, after });
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
          onClick={(e) => {
            if (sort.name == "asc") {
              setSort("name", "desc");
            }
            if (sort.name == "desc") {
              setSort("name", "asc");
            }

            sortName(candidates, sort);
          }}
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
          onClick={(e) => {
            if (sort.name == "asc") {
              setSort("name", "desc");
            }
            if (sort.name == "desc") {
              setSort("name", "asc");
            }
            sortAge(candidates, sort);
          }}
          style={{
            cursor: "pointer",
            width: "100%",
            textAlign: "center",
            borderRight: "1px solid #b3b3b3",
          }}
        >
          Age <SwapOutlined rotate={90} />
        </div>
        <div
          onClick={(e) => {
            if (sort.name == "asc") {
              setSort("name", "desc");
            }
            if (sort.name == "desc") {
              setSort("name", "asc");
            }
            sortGender(candidates, sort);
          }}
          style={{ cursor: "pointer", width: "100%", textAlign: "center" }}
        >
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
        dataSource={candidates}
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
function mapStateToProps({ candidates, filter, sort }: any) {
  return { candidates, filter, sort };
}

function mapDispatchToProps(dispatch: any) {
  return {
    saveItems: (items: ICandidates[]) => {
      const action = { type: "GET_API", payload: items };
      dispatch(action);
    },
    setFilterGender: (gender: any) => {
      const action = { type: "SET_GENDER", payload: gender };
      dispatch(action);
    },
    setFilterDate: (date: any) => {
      const action = { type: "SET_DATE", payload: date };
      dispatch(action);
    },
    setSort: (key: any, value: any) => {
      const action = { type: "SET_SORT", payload: { key, value } };
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Candidates);
