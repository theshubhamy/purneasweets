import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/redux/cart-slice";
const CartItem = (props) => {
  const dispatch = useDispatch();
  const { name, quantity, price, totalPrice, id, imageSrc } = props.item;
  const cartItemRemoveHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };
  const cartItemAddHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        price,
      })
    );
  };
  return (
    <>
      <li key={id} className="flex py-6">
        <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
          <img
            src={imageSrc}
            alt={`${imageSrc}+itemImage`}
            className="h-full w-full object-cover object-center"
          />
        </div>

        <div className="ml-4 flex flex-1 flex-col">
          <div>
            <div className="flex justify-between text-base font-medium text-gray-900">
              <div className="space-y-2">
                <p> {name} </p>
                <p>${price.toFixed(2)}/Item</p>
              </div>
              <div>
                <p className="ml-4">${totalPrice.toFixed(2)}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-1 items-end justify-between text-sm">
            <p className="text-gray-900 text-base justify-center items-center font-semibold">
              Qty : {quantity}
            </p>
            <div className="flex justify-around shadow-lg rounded-md text-white font-bold bg-indigo-600 space-x-4 px-4 py-2 ">
              <button
                type="button"
                onClick={cartItemRemoveHandler}
                className="font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <button
                type="button"
                onClick={cartItemAddHandler}
                className="font-medium"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default CartItem;
