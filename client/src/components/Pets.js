import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Pets = () => {
  const [pets, setPets] = useState([]);
  useEffect(() => {
    getPets();
  }, []);

  const getPets = async () => {
    try {
      let result = await axios.get("/api/pets");
      setPets(result.data);
    } catch (err) {
      alert("TODO: ERROR IN UI")
    }
  };
  const deletePet = async (id) => {
    try {
      await axios.delete(`/api/pets/${id}`);
      setPets(pets.filter((p) => p.id !== id));
    } catch (err) {
      alert("Error occured deleting")
    }
  };
  const renderPets = () => {
    return pets.map((pet) => {
      return (
        <div>
          <h1>{pet.name}</h1>
          <h1>{pet.description}</h1>
          <button onClick={() => deletePet(pet.id)}>Delete</button>
          <Link to={`/pets/${pet.id}/edit`} state={{ pet, y: 1 }}>Edit</Link>

          <Link to={`/pets/${pet.id}/foods`} state={{ pet }}>Show</Link>
        </div>
      );
    });
  };
  return (
    <div>
      <h1>Welcome to Furry Babies!</h1>
      <Link to="/pets/new">New Pet</Link>
      {renderPets()}
    </div>
  );
};

export default Pets