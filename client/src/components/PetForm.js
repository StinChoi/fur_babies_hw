import axios from "axios";
import React, { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router";

const PetForm = () => {
  const location = useLocation();
  const { pet } = location.state ? location.state : {};

  const [name, setName] = useState(pet ? pet.name : "");
  const [description, setDescription] = useState(pet ? pet.description : "");

  const params = useParams();
  console.log("p: ", params);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    let petData = { name, description };
    if (params.id) {
      try {
        await axios.put(`/api/pets/$(params.id)`, petData);
        navigate("/pets");
      } catch (err) {
        alert("Error occured in Update");
      }
    } else {
      try {
        await axios.post(`/api/pets`, petData);
        navigate("/pets");
      } catch (err) {
        alert("Error occured in Create");
      }
    }
  };
  return (
    <div>
      <h1>{params.id ? "Update" : "New"} Fur Babies Form Here!</h1>
      <p>id: {params.id}</p>
      <form onSubmit={handleSubmit}>
        <p>Name</p>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <p>Description</p>
        <input
          value={description}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <button>{params.id ? "Update" : "Create"}</button>
      </form>
    </div>
  );
};

export default PetForm;