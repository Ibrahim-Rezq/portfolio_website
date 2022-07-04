import React from "react";
import Card from "./Card";
const CardsGridView = ({ data }) => {
  return (
    <ul className="grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
      {data.map((item) => {
        return (
          <li key={item.id} className="bg-lime-200 rounded ">
            <Card data={item} />
          </li>
        );
      })}
    </ul>
  );
};

export default CardsGridView;
