import './App.css';
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router";
import Pets from "./components/Pets"
import About from "./components/About";
import PetForm from "./components/PetForm";
import PetFood from "./components/PetFood";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/pets" element={<Pets />} />
        <Route path="/pets/:id/food" element={<PetFood />} />
        <Route path="/pets/new" element={<PetForm />} />
        <Route path="/pets/:id/edit" element={<PetForm />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </div>
  );
}

export default App;
