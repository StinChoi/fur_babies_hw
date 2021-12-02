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
      setPets(res.data);
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
  
}