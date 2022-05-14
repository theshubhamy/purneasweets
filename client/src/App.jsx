import React from "react";
import Home from "./components/Layout/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Auth from "./auth/Auth";
const App = () => {
  const isAuthencated = true;
  return (
    <React.StrictMode>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
      {isAuthencated ? <Home /> : <Auth />}
    </React.StrictMode>
  );
};

export default App;
