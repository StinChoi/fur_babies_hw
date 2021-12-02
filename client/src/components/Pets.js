import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const furBabies = [
  { id: 1, name: "Fur Babies1", description: "desc 1" },
  { id: 2, name: "Fur Babies2", description: "desc 2" },
];

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
      setPets(furBabies);
    }
  };
  const deletePet = async (id) => {
    try {
      await axios.delete(`/api/pets/${id}`);
      setPets(pets.filter((p) => p.id !== id));
    } catch (err) {
      setPets(pets.filter((p) => p.id !== id));
    }
  };
  const renderPets = () => {
    return pets.map((pet) => {
      return (
        <div>
          <h1>{pet.name}</h1>
          <h1>{pet.description}</h1>
          <button onClick={() => deletePet(pet.id)}>delete</button>
          <Link to={{ pathname: `/pets/${pet.id}/edit`, pet: pet, y: 1 }}>Edit</Link>
        </div>
      );
    });
  };
  return (
    <div>
      <h1>Pets</h1>
      <Link to="/pets/new">New Pet</Link>
      {renderPets()}
    </div>
  );
};

export default Pets