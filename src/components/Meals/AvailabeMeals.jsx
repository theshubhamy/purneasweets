import React from "react";
import SushiImg from "../../assets/sushi.jpg";
import SchnitzelImg from "../../assets/Schnitzel.jpg";
import BarbecueBurgerImg from "../../assets/BarbecueBurger.jpeg";
import GreenBowlImg from "../../assets/GreenBowl.jpeg";
import MealItem from "./MealItem/MealItem";

const DUMMYMEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    images: SushiImg,
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    images: SchnitzelImg,
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    images: BarbecueBurgerImg,
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    images: GreenBowlImg,
    price: 18.99,
  },
  {
    id: "m5",
    name: "Sushi",
    description: "Finest fish and veggies",
    images: SushiImg,
    price: 22.99,
  },
  {
    id: "m6",
    name: "Schnitzel",
    description: "A german specialty!",
    images: SchnitzelImg,
    price: 16.5,
  },
  {
    id: "m7",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    images: BarbecueBurgerImg,
    price: 12.99,
  },
  {
    id: "m8",
    name: "Green Bowl",
    description: "Healthy...and green...",
    images: GreenBowlImg,
    price: 18.99,
  },
];
const AvailabeMeals = () => {
  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {DUMMYMEALS?.map((meal) => (
            <MealItem
              id={meal.id}
              key={meal.id}
              name={meal.name}
              imageSrc={meal.images}
              description={meal.description}
              price={meal.price}
            ></MealItem>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AvailabeMeals;
