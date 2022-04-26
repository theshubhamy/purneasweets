import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/outline";

const HeaderCartButton = () => {
  return (
    <button className=" shadow-lg rounded-full border-transparent bg-slate-50 flex px-4 py-2 space-x-3 justify-center items-center ">
      <span>
        <ShoppingCartIcon className="w-5 h-5" />
      </span>
      <span className="font-semibold  text-sm">Your Cart</span>
      <span className="bg-gray-900 rounded-full text-white px-3 font-semibold">
        4
      </span>
    </button>
  );
};

export default HeaderCartButton;
