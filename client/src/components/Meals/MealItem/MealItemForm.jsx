import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmountInput = amountInputRef.current.value;
    const enteredAmount = +enteredAmountInput;
    if (
      enteredAmountInput.trim().length === 0 ||
      enteredAmount < 1 ||
      enteredAmount > 5
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmount);
  };
  return (
    <>
      <form className="text-right" onSubmit={submitHandler}>
        <Input
          ref={amountInputRef}
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
        <button className="cursor-pointer font-semibold  text-white bg-gray-700 border border-gray-700 py-1 px-4 rounded-2xl ">
          Add to Cart
        </button>
        {!amountIsValid && (
          <p className="text-red-500 text-sm">
            please enter a valid amount (1 to 5).
          </p>
        )}
      </form>
    </>
  );
};

export default MealItemForm;
