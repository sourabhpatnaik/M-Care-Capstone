import { Route, Routes } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import "./style.scss";
import Navbar from "./Pages/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
