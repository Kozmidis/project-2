import { CardApp } from "@/components/CardsApp/CardApp";
import { FC } from "react";
import { Jobs, CardsType } from "@/types/types";

export const TabCards: FC<Jobs> = (props) => {
  console.log(props);
  return (
    <div
      style={{
        display: "grid",
        gap: 15,
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        height: "calc(100vh - 230px)",
        gridAutoRows: " min-content",
        gridAutoColumns: " min-content",
      }}
    >
      {props.jobs.map((item: CardsType) => (
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
  );
};
