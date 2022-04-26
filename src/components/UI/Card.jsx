import React from "react";

const Card = (props) => {
  return (
    <div className="p-4 shadow-md rounded-xl  bg-white">{props.children}</div>
  );
};

export default Card;
