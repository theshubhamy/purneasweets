import React from "react";
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
    <div>
      {DUMMYMEALS.map((data) => (
        <li key={data.id}>
          <p>{data.name}</p>
          <p>{data.description}</p>
          <p>{data.price}</p>
        </li>
      ))}
    </div>
  );
};

export default AvailabeMeals;
