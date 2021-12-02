import './App.css';
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router";
import Pets from "./components/Pets"


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/pets" element={<Pets />} />
      </Routes>

    </div>
  );
}

export default App;
