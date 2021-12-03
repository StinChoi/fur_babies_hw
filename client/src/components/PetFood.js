import axios from "axios";
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router";
import Food from "./Food";
import FoodNew from "./FoodNew";

const PetFood = (props) => {
  const [food, setFood] = useState([]);
  const location = useLocation();
  const { pet } = location.state;

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      let result = await axios.get(`/api/pets/${pet.id}/food`);
      setFood(result.data);
    } catch (error) {
      alert("Error Receiving");
    }
  };
  const renderFood = () =>
    food.map((f) => <Food key={f.id} {...f} />);

  const addFood = (food) => {
    setFood([food, ...food]);
  };

  return (
    <div>
      <h2>Your Fur Baby: {pet.name}</h2>
      <p>{pet.description}</p>
      <hr />
      <h3>Fur Baby - Food</h3>
      <FoodNew petId={pet.id} addFood={addFood} />
      {renderFood()}
    </div>
  );
};

export default PetFood;