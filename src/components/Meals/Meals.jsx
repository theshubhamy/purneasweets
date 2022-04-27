import React from "react";
import MealsSummry from "./MealsSummry";
import AvailableMeals from "./AvailableMeals";
import mealsImage from "../../assets/meals.jpg";
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
      <AvailableMeals />
    </>
  );
};

export default Meals;
