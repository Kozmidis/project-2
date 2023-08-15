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
    cardType: "active",
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
    cardType: "active",
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
    cardType: "active",
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
    cardType: "completed",
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
    cardType: "unfinished",
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
    cardType: "unfinished",
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
  return state;
};

const store = createStore(reduser);

export default store;
