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
    date: new Date(2023, 7, 15),
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
    date: new Date(2023, 7, 9),
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
    date: new Date(2023, 7, 4),
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
    date: new Date(2023, 7, 3),
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
    date: new Date(2023, 7, 12),
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
    date: new Date(2023, 7, 10),
    candidates: "12+ candidates",
  },
];

const reduser = (state = initialState, action: string) => {
  console.log("reduser > ", action);

  const cards: any[] = [];
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
      return [...state];
    case "COMPLETED":
      state = initialState;
      state.map((item) => {
        if (item.cardType === "COMPLETED") {
          cards.push(item);
        }
        state = cards;
      });
      // console.log("COMPLETED state", state);
      return [...state];
    case "UNFINISHED":
      state = initialState;
      state.map((item) => {
        if (item.cardType === "UNFINISHED") {
          cards.push(item);
        }

        state = cards;
      });
      // console.log("UNFINISHED state", state);
      return [...state];
    case "SORT_DATE_ASC":
      const ascState = state.slice().sort(function (a, b) {
        console.log("asc", state);
        return a.date - b.date;
      });
      return (state = ascState);
    case "SORT_DATE_DESC":
      const descState = state.slice().sort(function (a, b) {
        console.log("DESC", state);
        return b.date - a.date;
      });
      return (state = descState);
    default:
      state = initialState;
      state.map((item) => {
        if (item.cardType === "ACTIVE") {
          cards.push(item);
        }
        state = cards;
      });
      // console.log("ACTIVE state", state);
      return state;
  }
};

const store = createStore(reduser);

export default store;
