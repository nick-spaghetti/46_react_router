import "./App.css";
import React from "react";
import { BrowserRouter } from "react-router-dom";

import NavBar from "./props/navbar";
import DogRoutes from "./props/routes";

import whiskey from "./styles/whiskey.jpg";
import tubby from "./styles/tubby.jpg";
import duke from "./styles/duke.jpg";
import perry from "./styles/perry.jpg";

function App({ dogs }) {
	return (
		<div className="App">
			<BrowserRouter>
				<NavBar dogs={dogs} />
				<div>
					<DogRoutes dogs={dogs} />
				</div>
			</BrowserRouter>
		</div>
	);
}

export const dogs = [
	{
		name: "Whiskey",
		age: 5,
		src: whiskey,
		facts: [
			"Whiskey loves eating popcorn.",
			"Whiskey is a terrible guard dog.",
			"Whiskey wants to cuddle with you!",
		],
	},
	{
		name: "Duke",
		age: 3,
		src: duke,
		facts: [
			"Duke believes that ball is life.",
			"Duke likes snow.",
			"Duke enjoys pawing other dogs.",
		],
	},
	{
		name: "Perry",
		age: 4,
		src: perry,
		facts: [
			"Perry loves all humans.",
			"Perry demolishes all snacks.",
			"Perry hates the rain.",
		],
	},
	{
		name: "Tubby",
		age: 4,
		src: tubby,
		facts: [
			"Tubby is really stupid.",
			"Tubby does not like walks.",
			"Angelina used to hate Tubby, but claims not to anymore.",
		],
	},
];

App.defaultProps = { dogs };

export default App;
