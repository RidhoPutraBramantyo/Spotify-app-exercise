// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";

function App() {
	return (
		<>
			<Routes>
				<Route key="home" path="/" element={<HomePage />}></Route>
			</Routes>
		</>
	);
}

export default App;
