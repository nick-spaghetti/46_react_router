import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Soda from "./props/soda";
import Chips from "./props/chips";
import Cookies from "./props/cookies";
// import NavBar from "./props/navbar";
import Machine from "./props/machine";
// import "./App.css";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				{/* <NavBar /> */}
				<Routes>
					<Route
						exact
						path="/"
						element={<Machine />}
					/>
					<Route
						exact
						path="/soda"
						element={<Soda />}
					/>
					<Route
						exact
						path="/chips"
						element={<Chips />}
					/>
					<Route
						exact
						path="/cookies"
						element={<Cookies />}
					/>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
