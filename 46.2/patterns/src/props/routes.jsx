import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import DogList from "./list";
import FilterDetails from "./filter";

function DogRoutes({ dogs }) {
	return (
		<Routes>
			<Route
				exact
				path="/dogs"
				element={<DogList dogs={dogs} />}
			/>
			<Route
				exact
				path="/dogs/:name"
				element={<FilterDetails dogs={dogs} />}
			/>
			<Route
				path="*"
				element={<Navigate to="/dogs" />}
			/>
		</Routes>
	);
}

export default DogRoutes;
