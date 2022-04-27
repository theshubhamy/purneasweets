import React, { useState } from "react";
import Header from "./Header";
import Meals from "../../components/Meals/Meals";
import Cart from "../../components/Cart/Cart";
const Home = () => {
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  return (
    <>
      {cartIsShown && (
        <Cart
          onShowCart={showCartHandler}
          onHideCart={hideCartHandler}
          isShow={cartIsShown}
        />
      )}
      <Header onShowCart={showCartHandler} />
      <Meals />
    </>
  );
};

export default Home;
