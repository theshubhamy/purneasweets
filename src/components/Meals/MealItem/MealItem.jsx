import React, { useContext } from "react";
import CartContext from "../../../store/CartContext";
import MealItemForm from "./MealItemForm";
const MealItem = (props) => {
  const context = useContext(CartContext);
  const addToCartHandler = (amount) => {
    context.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      images: props.imageSrc,
      price: props.price,
    });
  };
  return (
    <>
      <div key={props.id} className="group relative">
        <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
          <img
            src={props.imageSrc}
            alt={props.imageSrc + "alt"}
            className="w-full h-full object-center object-cover lg:w-full lg:h-full"
          />
        </div>
        <div className="mt-4 flex justify-between">
          <div>
            <h3 className="text-lg text-gray-700">{props.name}</h3>
            <p className="mt-1 text-base text-gray-500">{props.description}</p>
          </div>
          <p className="text-lg font-medium text-indigo-600">
            ${props.price.toFixed(2)}
          </p>
          <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
        </div>
      </div>
    </>
  );
};

export default MealItem;
