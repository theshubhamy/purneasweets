import React from "react";

const Card = (props) => {
  return (
    <div className="p-4 shadow-lg rounded-lg  bg-gray-50">{props.children}</div>
  );
};

export default Card;
