import axios from "axios";
import React, { useState } from "react";

const FoodNew = (props) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const food = { name, price };
    try {
      let result = await axios.post(`/api/pets/${props.petId}/food`, food);
      props.addFood(result.data);
      setName("");
      setPrice("");
    } catch (error) {
      alert("Error");
    }
  };
  return (
    <div>
      <h1>New Food for your Fur Baby</h1>
      <form onSumbit={handleSubmit}>
        <p>Brand</p>
        <input value={name} onChange={(e) => setName(e.target.value)} />
        <p>Price</p>
        <input value={price} onChange={(e) => setPrice(e.target.value)} />
        <button>Add</button>
      </form>
    </div>
  );
};

export default FoodNew;