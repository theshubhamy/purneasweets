import React from "react";
import MealItemForm from "./MealItemForm";
const MealItem = (props) => {
  return (
    <li className="flex justify-between m-4 border-b-2 border-gray-500">
      <div>
        <h1 className="m-1">{props.name}</h1>
        <div className="italic">{props.description}</div>
        <div className="mt-1 font-bold color-indigo-500 text-lg">
          ${props.price.toFixed(2)}
        </div>
      </div>
      <div>
        <MealItemForm id={props.id} />
      </div>
    </li>
  );
};

export default MealItem;
