import React from "react";
import CartContext from "./CartContext";

const CartProvider = (props) => {
  return (
    <>
      <CartContext.Provider>{props.children}</CartContext.Provider>
    </>
  );
};

export default CartProvider;
