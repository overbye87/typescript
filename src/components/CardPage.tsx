import React, { FC } from "react";
import Card, { CardVariant } from "./Card";
import EventsExample from "./EventsExample";

const CardPage: FC = () => {
  return (
    <div>
      <h1>Hello!</h1>
      <EventsExample />
      <Card
        onClick={(num) => console.log("Click", num)}
        width="200px"
        height="200px"
        variant={CardVariant.outlined}
      >
        <button style={{ margin: 15 }}>Button</button>
      </Card>
    </div>
  );
};

export default CardPage;
