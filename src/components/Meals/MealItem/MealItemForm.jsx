import React from "react";
import Input from "../../UI/Input";
const MealItemForm = (props) => {
  return (
    <>
      <form className="text-right">
        <Input
          label="Amount"
          input={{
            id: "amount" + props.id,
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button className="cursor-pointer font-semibold  text-white bg-gray-700 border border-gray-700 py-1 px-8 rounded-2xl ">
          Add to Cart
        </button>
      </form>
    </>
  );
};

export default MealItemForm;
