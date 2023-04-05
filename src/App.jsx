import "./App.css";
import { Routes, Route, Router } from "react-router-dom";
import HomePage from "./pages/Home";
import Content2 from "./components/Content2";
import Navbar from "./components/Navbar";
import LoginPage from "./pages/Login";

function App() {
	return (
		<Routes>
			<Route path="/login" element={<LoginPage />}></Route>
			<Route key="home" path="/" element={<HomePage />}></Route>
			<Route path="/navbar" element={<Navbar />}></Route>
			<Route path="/content2" element={<Content2 />}></Route>
		</Routes>
	);
}

export default App;
