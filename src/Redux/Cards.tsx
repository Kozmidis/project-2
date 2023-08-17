import { connect } from "react-redux";
import { CardApp } from "./CardApp";
import type { TabsProps } from "antd";

import { Tabs, Tag } from "antd";
import { contentQuotesLinter } from "@ant-design/cssinjs/lib/linters";

export type CardsType = {
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

function Cards(props: any) {
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
          <Tag color="blue">{props.state.length}</Tag>
        </div>
      ),
      children: (
        <div
          style={{
            display: "grid",
            gap: 15,
            gridTemplateColumns:
              "max-content max-content max-content max-content",
            height: "calc(100vh - 230px)",
            gridAutoRows: " min-content",
            gridAutoColumns: " min-content",
          }}
        >
          {props.state.map((item: CardsType) => (
            <CardApp key={item.id} {...item} />
          ))}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "300px",
              height: "300px",
              border: "dashed #b4b4b4",
              cursor: "pointer",
              color: "#5ec954",
              textAlign: "center",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: 50,
                  height: "min-content",
                }}
              >
                +
              </p>
              <h3>Create New Job</h3>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "2",
      label: (
        <div style={{ display: "flex", gap: 4 }}>
          <p>Completed</p>
          <Tag color="blue">{props.state.length}</Tag>
        </div>
      ),
      children: (
        <div
          style={{
            display: "grid",
            gap: 15,
            gridTemplateColumns:
              "max-content max-content max-content max-content",
            height: "calc(100vh - 230px)",
            gridAutoRows: " min-content",
            gridAutoColumns: " min-content",
          }}
        >
          {props.state.map((item: CardsType) => (
            <CardApp key={item.id} {...item} />
          ))}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "300px",
              height: "300px",
              border: "dashed #b4b4b4",
              cursor: "pointer",
              color: "#5ec954",
              textAlign: "center",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: 50,
                  height: "min-content",
                }}
              >
                +
              </p>
              <h3>Create New Job</h3>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "3",
      label: (
        <div style={{ display: "flex", gap: 4 }}>
          <p>Unfinished</p>
          <Tag color="blue">{props.state.length}</Tag>
        </div>
      ),
      children: (
        <div
          style={{
            display: "grid",
            gap: 15,
            gridTemplateColumns:
              "max-content max-content max-content max-content",
            height: "calc(100vh - 230px)",
            gridAutoRows: " min-content",
            gridAutoColumns: " min-content",
          }}
        >
          {props.state.map((item: CardsType) => (
            <CardApp key={item.id} {...item} />
          ))}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              width: "300px",
              height: "300px",
              border: "dashed #b4b4b4",
              cursor: "pointer",
              color: "#5ec954",
              textAlign: "center",
            }}
          >
            <div>
              <p
                style={{
                  fontSize: 50,
                  height: "min-content",
                }}
              >
                +
              </p>
              <h3>Create New Job</h3>
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <>
      <Tabs defaultActiveKey="1" items={itemsTabs} onChange={onChange} />
    </>
  );
}

function mapStateToProps(state: CardsType) {
  console.log("mapStateToProps >", state);
  return { state: state };
}

function mapDispatchToProps(dispatch: any) {
  return {
    onActiveCards: () => {
      console.log("active");
      const action = { type: "ACTIVE" };
      dispatch(action);
    },
    onCompletedCards: () => {
      console.log("completed");
      const action = { type: "COMPLETED" };
      dispatch(action);
    },
    onUnfinishedCards: () => {
      console.log("unfinished");
      const action = { type: "UNFINISHED" };
      dispatch(action);
    },
    ascDate: () => {
      console.log("asc click");
      const action = { type: "SORT_DATE_ASC" };
      dispatch(action);
    },
    descDate: () => {
      console.log("desc click");
      const action = { type: "SORT_DATE_DESK" };
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
