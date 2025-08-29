import React from "react";
import Card from "./card";
import data from "./data";

function displayCards(card) {
  return (
    <Card
      name={card.name}
      imgURL={card.imgURL}
      category={card.category}
      cost={card.cost}
    />
  );
}

function Timeline() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">{data.map(displayCards)}</div>
        </div>
      </section>
    </>
  );
}

export default Timeline;
