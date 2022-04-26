import React from "react";
import MealsSummry from "./MealsSummry";
import AvailabeMeals from "./AvailabeMeals";
import mealsImage from ".././assets/meals.jpg";
const Meals = () => {
  return (
    <>
      <div className="w-full h-96 z-0 overflow-hidden">
        <img
          className="h-full w-full object-cover "
          src={mealsImage}
          alt="heroimage"
        />
      </div>
      <MealsSummry />
      <AvailabeMeals />
    </>
  );
};

export default Meals;
