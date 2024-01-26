import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Routes/Home";
import About from "./Routes/About";
import Service from "./Routes/Service";
import Contact from "./Routes/Contact";
import Signup from "./Routes/Signup";

function App() {
  return (
    <div className="App">
      <Routes>
        {" "}
        <Route path="/" element={<Home />} />{" "}
        <Route path="/about" element={<About />} />{" "}
        <Route path="/service" element={<Service />} />{" "}
        <Route path="/contact" element={<Contact />} />{" "}
        <Route path="/Signup" element={<Signup />} />{" "}
      </Routes>{" "}
    </div>
  );
}
export default App;
