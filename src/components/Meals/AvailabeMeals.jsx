import React from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
const DUMMYMEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];
const AvailabeMeals = () => {
  return (
    <section className="max-w-5xl w-11/12 mx-auto my-8 ">
      <Card>
        <ul>
          {DUMMYMEALS.map((meal) => (
            <MealItem
              id={meal.id}
              key={meal.id}
              name={meal.name}
              description={meal.description}
              price={meal.price}
            ></MealItem>
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvailabeMeals;
