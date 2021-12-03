import react from "react";

const Food = (props) => {
  const { name, price, id, pet_id } = props;
  return (
    <div>
      <h3>Name: {name}</h3>
      <p>price: {price}</p>
      <p>id: {id}</p>
      <p>pet_id: {pet_id}</p>
    </div>
  );
};

export default Food;