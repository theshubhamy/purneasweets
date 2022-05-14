import React from "react";
import { useSelector } from "react-redux";
import { ShoppingCartIcon } from "@heroicons/react/outline";

const HeaderCartButton = (props) => {
  const cartQuantity = useSelector((state) => state.cart.totalQuantity);

  return (
    <button
      className=" md:shadow-lg rounded-full border-transparent mx-2 md:mx-0 md:bg-gray-50 flex md:px-4 md:py-2 space-x-3 justify-center items-center"
      onClick={props.onClick}
    >
      <span>
        <ShoppingCartIcon className="w-5 h-5 text-white md:text-gray-900" />
      </span>
      <span className="font-semibold  text-sm sr-only md:not-sr-only">
        Your Cart
      </span>
      <span className="sr-only md:not-sr-only md:bg-gray-900 rounded-full text-white md:px-3 font-semibold">
        {cartQuantity || "0"}
      </span>
    </button>
  );
};

export default HeaderCartButton;
