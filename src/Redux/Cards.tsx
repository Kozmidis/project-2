import { connect } from "react-redux";
import { CardApp } from "./CardApp";

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
  return (
    <div
      style={{
        display: "grid",
        gap: 15,
        gridTemplateColumns: "max-content max-content max-content max-content",
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
  );
}

function mapStateToProps(state: CardsType) {
  console.log("mapStateToProps >", state);
  return { state: state };
}

function mapDispatchToProps(dispatch) {}
export default connect(mapStateToProps)(Cards);
