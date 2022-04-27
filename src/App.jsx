import React from "react";
import Home from "./components/Layout/Home";
import CartProvider from "./store/CartProvider";

const App = () => {
  return (
    <React.StrictMode>
      <CartProvider>
        <Home />
      </CartProvider>
    </React.StrictMode>
  );
};

export default App;
