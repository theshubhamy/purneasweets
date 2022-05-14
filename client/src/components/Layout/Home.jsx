import React, { useState, useEffect } from "react";
import Header from "./Header";
import Meals from "../../components/Meals/Meals";
import Cart from "../../components/Cart/Cart";
import { useSelector, useDispatch } from "react-redux";
import { sendCartData, fetchCartData } from "../../store/redux/cart-actions";
let isInitial = true;
const Home = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const [cartIsShown, setCartIsShown] = useState(false);
  const showCartHandler = () => {
    setCartIsShown(true);
  };
  const hideCartHandler = () => {
    setCartIsShown(false);
  };
  useEffect(() => {
    dispatch(fetchCartData());
    return () => {};
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }
    if (cart.isChanged) {
      dispatch(sendCartData(cart));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cart, dispatch]);

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
