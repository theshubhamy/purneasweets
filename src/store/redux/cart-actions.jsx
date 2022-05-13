import { toast } from "react-toastify";
import { cartActions } from "./cart-slice";
export const fetchCartData = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch(
        "https://fooddelivery-19f57-default-rtdb.firebaseio.com/cart.json"
      );
      if (response.ok) {
        toast.success("Fetch cart data successfully!");
      } else {
        toast.error("Could not fetch cart data!");
      }
      const data = await response.json();
      return data;
    };
    try {
      const cartData = await fetchData();
      dispatch(
        cartActions.replaceCart({
          items: cartData.items || [],
          totalQuantity: cartData.totalQuantity,
        })
      );
    } catch (error) {
      toast.error(`${error.response} Could not fetch cart data!`);
    }
  };
};
export const sendCartData = (cart) => {
  return async () => {
    const sendRequest = async () => {
      const response = await fetch(
        `https://fooddelivery-19f57-default-rtdb.firebaseio.com/cart.json`,
        {
          method: "PUT",
          body: JSON.stringify(cart),
        }
      );
      if (response.ok) {
        toast.success("Add to cart successfully!");
      } else {
        toast.error("Add to cart failed!");
      }
    };
    try {
      await sendRequest();
    } catch (error) {
      toast.error("Sending Cart data failed!");
    }
  };
};
