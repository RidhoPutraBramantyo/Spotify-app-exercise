import logo from "./logo.svg";
import "./App.css";
import HomePage from "./pages/home";
import { Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
// import Navbar from "./components/navbar";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage user="udin" />}></Route>
        <Route path="login" element={<LoginPage />}></Route>
        {/* <Route path="navbar" element={<Navbar />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
