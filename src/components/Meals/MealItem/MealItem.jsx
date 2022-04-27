import React from "react";
//import MealItemForm from "./MealItemForm";
const MealItem = (props) => {
  return (
    <div key={props.id} className="group relative">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
        <img
          src={props.imageSrc}
          alt={props.imageAlt}
          className="w-full h-full object-center object-cover lg:w-full lg:h-full"
        />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-lg text-gray-700">
            <span aria-hidden="true" className="absolute inset-0" />
            {props.name}
          </h3>
          <p className="mt-1 text-base text-gray-500">{props.description}</p>
        </div>
        <p className="text-lg font-medium text-indigo-600">
          ${props.price.toFixed(2)}
        </p>
      </div>
    </div>

    // <li className="flex justify-between m-4 border-b-2 border-gray-500">
    //   <div>
    //     <h1 className="m-1">{props.name}</h1>
    //     <div className="italic">{props.description}</div>
    //     <div className="mt-1 font-bold color-indigo-500 text-lg">
    //       ${props.price.toFixed(2)}
    //     </div>
    //   </div>
    //   <div>
    //     <MealItemForm id={props.id} />
    //   </div>
    // </li>
  );
};

export default MealItem;
