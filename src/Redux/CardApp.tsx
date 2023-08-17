import { Card } from "antd";
const { Meta } = Card;

export const CardApp = (props: any) => {
  const options = {
    day: "numeric",
    month: "short",
  };

  return (
    <Card
      title={props.logo}
      extra={<p>{props.date.toLocaleDateString("en-US", options)}</p>}
      style={{ width: "300px", height: "300px", cursor: "pointer" }}
    >
      <p>{props.spec}</p>
      <Meta title={props.title} description={props.subTitle} />

      <p>{props.text}</p>
      <p>{props.candidates}</p>
    </Card>
  );
};
