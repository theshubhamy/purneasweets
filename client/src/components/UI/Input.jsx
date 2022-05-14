import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="flex items-center mb-2">
      <label className="font-bold mr-4" htmlFor={props.input.id}>
        {props.label}
      </label>
      <input
        className="w-12 rounded-md  cursor-text border   border-gray-700 font-semibold pl-2"
        ref={ref}
        id={props.input.id}
        {...props.input}
      />
    </div>
  );
});

export default Input;
