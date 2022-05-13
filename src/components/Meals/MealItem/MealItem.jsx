import React from "react";
import { useDispatch } from "react-redux";
import { cartActions } from "../../../store/redux/cart-slice";

const MealItem = (props) => {
  
  const dispatch = useDispatch();
  const { id, name, imageSrc, description, price } = props;
  const addToCartHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        name,
        imageSrc,
        description,
        price,
      })
    );
  };
  return (
    <>
      <div key={id} className="group relative">
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img
            src={imageSrc}
            alt={imageSrc + "alt"}
            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-lg text-gray-700">{name}</h3>
            <p className="mt-1 text-base text-gray-500">{description}</p>
          </div>
          <div>
            <p className="text-lg font-medium  text-center text-indigo-600">
              ${price.toFixed(2)}
            </p>
            <button
              onClick={addToCartHandler}
              className="cursor-pointer font-semibold  text-white bg-gray-700 border border-gray-700 py-1 px-4 rounded-2xl "
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MealItem;
