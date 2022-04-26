import React from "react";

const MealItem = (props) => {
  return (
    <li className="flex justify-between m-4 border-b-2 border-gray-500">
      <div>
        <h1 className="m-1">{props.name}</h1>
        <div className="italic">{props.description}</div>
        <div className="mt-1 font-bold color-indigo-500 text-lg">${props.price.toFixed(2)}</div>
      </div>
      <div>
        <button>add to Cart</button>
      </div>
    </li>
  );
};

export default MealItem;
