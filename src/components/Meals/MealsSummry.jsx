import React from "react";

const MealsSummry = () => {
  return (
    <div className="flex justify-center items-center my-5">
      <section className=" text-center max-w-2xl w-11/12 m-auto -mt-40 relative bg-gray-700 text-white rounded-xl p-4 shadow-xl space-y-4">
        <h1 className=" font-semibold text-3xl">
          Delicious Food, Delivered to You
        </h1>
        <p className="block">
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </section>
    </div>
  );
};

export default MealsSummry;
