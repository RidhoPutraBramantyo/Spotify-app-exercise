// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route, Router } from "react-router-dom";
import HomePage from "./pages/Home";
import Content from "./components/Content";
import Content2 from "./components/Content2";
import Navbar from "./components/Navbar";
import HomePage from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route key="home" path="/" element={<HomePage />}></Route>
      <Route path="/home" element={<HomePage />}></Route>
      <Route path="/navbar" element={<Navbar />}></Route>
      <Route path="/content" element={<Content />}></Route>
      <Route path="/content2" element={<Content2 />}></Route>
    </Routes>
  );

}

export default App;
