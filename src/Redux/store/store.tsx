import { createStore } from "redux";
import {
  SlackOutlined,
  SkypeOutlined,
  IeOutlined,
  YoutubeOutlined,
  AndroidOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

export const initialState = [
  {
    id: 1,
    title: "Senior Product Designer",
    spec: "Design",
    subTitle: "Dhaka, Bangladesh",
    text: "Prosto text, bez ogromnogo smisla",
    cardType: "ACTIVE",
    logo: (
      <SlackOutlined
        style={{
          fontSize: 40,
          borderRadius: "50%",
          border: "1px solid #cfcfcf",
          color: "#5cda62",
        }}
      />
    ),
    date: "new Date()",
    candidates: "122+ candidates",
  },
  {
    id: 2,
    title: "Copywriter",
    spec: "Marketing",
    subTitle: "Dhaka, Bangladesh",
    text: "Prosto text, bez ogromnogo smisla",
    cardType: "ACTIVE",
    logo: (
      <SkypeOutlined
        style={{
          fontSize: 40,
          borderRadius: "50%",
          border: "1px solid #cfcfcf",
          color: "#0066ff",
        }}
      />
    ),
    date: "8 July",
    candidates: "201+ candidates",
  },
  {
    id: 3,
    title: "WordPress Developer",
    spec: "Developer",
    subTitle: "Dhaka, Bangladesh",
    text: "Prosto text, bez ogromnogo smisla",
    cardType: "ACTIVE",
    logo: (
      <YoutubeOutlined
        style={{
          fontSize: 40,
          borderRadius: "50%",
          border: "1px solid #cfcfcf",
          color: "#ff0000",
        }}
      />
    ),
    date: "10 July",
    candidates: "60+ candidates",
  },
  {
    id: 4,
    title: "Developer",
    spec: "Developer",
    subTitle: "Dhaka, Bangladesh",
    text: "Prosto text, bez ogromnogo smisla",
    cardType: "COMPLETED",
    logo: (
      <IeOutlined
        style={{
          fontSize: 40,
          borderRadius: "50%",
          border: "1px solid #cfcfcf",
          color: "#86b3f7",
        }}
      />
    ),
    date: "4 July",
    candidates: "322+ candidates",
  },
  {
    id: 5,
    title: "Marketing",
    spec: "Marketing",
    subTitle: "Dhaka, Bangladesh",
    text: "Prosto text, bez Marketing Marketing",
    cardType: "UNFINISHED",
    logo: (
      <AndroidOutlined
        style={{
          fontSize: 40,
          borderRadius: "50%",
          border: "1px solid #cfcfcf",
          color: "#54aa4c",
        }}
      />
    ),
    date: "3 July",
    candidates: "344+ candidates",
  },
  {
    id: 6,
    title: "Developer UX/UI",
    spec: "Developer",
    subTitle: "Dhaka, Bangladesh",
    text: "Prosto text, bez Developer Marketing",
    cardType: "UNFINISHED",
    logo: (
      <TwitterOutlined
        style={{
          fontSize: 40,
          borderRadius: "50%",
          border: "1px solid #cfcfcf",
          color: "#4a93ff",
        }}
      />
    ),
    date: "4 July",
    candidates: "12+ candidates",
  },
];

const reduser = (state = initialState, action: string) => {
  console.log("reduser > ", action);

  const cards = [];
  switch (action.type) {
    case "ACTIVE":
      state = initialState;
      state.map((item) => {
        if (item.cardType === "ACTIVE") {
          cards.push(item);
        }
        state = cards;
      });
      // console.log("ACTIVE state", state);
      return state;
    case "COMPLETED":
      state = initialState;
      state.map((item) => {
        if (item.cardType === "COMPLETED") {
          cards.push(item);
        }
        state = cards;
      });
      // console.log("COMPLETED state", state);
      return state;
    case "UNFINISHED":
      state = initialState;
      state.map((item) => {
        if (item.cardType === "UNFINISHED") {
          cards.push(item);
        }
        state = cards;
      });
      // console.log("UNFINISHED state", state);
      return state;
    default:
      return state;
  }
};

const store = createStore(reduser);

export default store;
