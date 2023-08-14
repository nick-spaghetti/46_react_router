import React, { useState, useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Color from "./color";
import ColorList from "./list";
import ColorForm from "./form";

const ColorRoutes = () => {
	const initialColors = {
		red: "#FF0000",
		green: "#00FF00",
		blue: "#0000FF",
	};

	const [colors, setColors] = useState(initialColors);

	useEffect(() => {
		localStorage.setItem("colors", JSON.stringify(colors));
	}, [colors]);

	const handleAdd = (newColorObj) => {
		setColors((prevColors) => ({ ...prevColors, ...newColorObj }));
	};

	return (
		<Routes>
			<Route
				path="/colors"
				element={<ColorList colors={colors} />}
			/>
			<Route
				path="/colors/new"
				element={<ColorForm newColor={handleAdd} />}
			/>
			<Route
				path="/colors/:color"
				element={<Color colors={colors} />}
			/>
			<Route
				path="*"
				element={<Navigate to="/colors" />}
			/>
		</Routes>
	);
};

export default ColorRoutes;
