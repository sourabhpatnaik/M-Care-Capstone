import { Route, Routes } from "react-router-dom";
import Register from "./Pages/Register";
import Login from "./Pages/Login";
import Home from "./Pages/Home";
import "./style.scss";
import Navbar from "./Pages/navbar";
import ErrorPage from "./Pages/ErrorPage";
import About from "./Pages/About";
import Services from "./Pages/Services";

function App() {

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/ErrorPage" element={<ErrorPage/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
