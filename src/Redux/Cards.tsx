import { FC } from "react";
import { connect } from "react-redux";
import type { TabsProps, MenuProps } from "antd";
import { CalendarFilled } from "@ant-design/icons";
import { Dropdown, Space, Tabs, Tag } from "antd";
import { TabCards } from "@/components/TabCards/TabCards";

export type CardsType = {
  jobs: {};
  id: number;
  title: string;
  spec: string;
  subTitle: string;
  text: string;
  cardType: string;
  logo: string;
  date: string;
  candidates: string;
};

const Cards: FC<any> = (props) => {
  console.log("render > ", props);

  const onChange = (key: string) => {
    if (key === "1") {
      props.onActiveCards();
    }
    if (key === "2") {
      props.onCompletedCards();
    }
    if (key === "3") {
      props.onUnfinishedCards();
    }
  };

  const itemsTabs: TabsProps["items"] = [
    {
      key: "1",
      label: (
        <div style={{ display: "flex", gap: 4 }}>
          <p>Active jobs</p>
          <Tag color="blue">3</Tag>
        </div>
      ),
      children: <TabCards jobs={props.jobs} />,
    },
    {
      key: "2",
      label: (
        <div style={{ display: "flex", gap: 4 }}>
          <p>Completed</p>
          <Tag color="blue">1</Tag>
        </div>
      ),
      children: <TabCards jobs={props.jobs} />,
    },
    {
      key: "3",
      label: (
        <div style={{ display: "flex", gap: 4 }}>
          <p>Unfinished</p>
          <Tag color="blue">2</Tag>
        </div>
      ),
      children: <TabCards jobs={props.jobs} />,
    },
  ];

  const onClick: MenuProps["onClick"] = ({ key }) => {
    if (key === "1") {
      props.ascDate();
      console.log(`asc ${key}`);
    }
    if (key === "2") {
      props.descDate();
      console.log(`desc ${key}`);
    }
  };

  const items: MenuProps["items"] = [
    {
      label: "Asc",
      key: "1",
    },
    {
      label: "Decs",
      key: "2",
    },
  ];
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h2>Jobs</h2>
        <Dropdown menu={{ items, onClick }}>
          <a onClick={(e) => e.preventDefault()}>
            <Space>
              <p style={{ color: "#a0a0a0", fontWeight: "500" }}>Sort by: </p>
              Createon Date
              <CalendarFilled />
            </Space>
          </a>
        </Dropdown>
      </div>
      <Tabs defaultActiveKey="1" items={itemsTabs} onChange={onChange} />
    </>
  );
};

function mapStateToProps({ jobs }: CardsType) {
  console.log("JobsmapStateToProps >", jobs);
  return { jobs };
}

function mapDispatchToProps(dispatch: any) {
  return {
    onActiveCards: () => {
      const action = { type: "ACTIVE" };
      dispatch(action);
    },
    onCompletedCards: () => {
      const action = { type: "COMPLETED" };
      dispatch(action);
    },
    onUnfinishedCards: () => {
      const action = { type: "UNFINISHED" };
      dispatch(action);
    },
    ascDate: () => {
      const action = { type: "SORT_DATE_ASC" };
      dispatch(action);
    },
    descDate: () => {
      const action = { type: "SORT_DATE_DESC" };
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
