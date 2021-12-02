import './App.css';
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router";
import Pets from "./components/Pets"
import About from "./components/About";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/pets" element={<Pets />} />
        <Route path="/about" element={<About />} />
      </Routes>

    </div>
  );
}

export default App;
