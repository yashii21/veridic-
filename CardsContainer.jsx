import React from "react";
import Card from "./Card";
const CardsContainer = ({ data }) => {
  console.log(data);
  return (
    <div id="CardsContainer">
      {data.map((elem) => (
        <Card key={elem.id} data={elem} />
      ))}
    </div>
  );
};

export default CardsContainer;
