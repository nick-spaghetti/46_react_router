import React, { useState } from "react";
import Message from "./msg";
import { Link } from "react-router-dom";
import chipsImg from "../styles/Chips.png";
import "../styles/chips.css";

const Chips = () => {
	const [bags, setBags] = useState([]);

	function handleClick() {
		const x = window.innerWidth * Math.random();
		const y = window.innerHeight * Math.random();
		setBags((prevBags) => [...prevBags, { x, y }]);
	}

	const b = bags.map((bag, i) => (
		<img
			key={i}
			src={chipsImg}
			className="bag"
			style={{ top: `${bag.y}px`, left: `${bag.x}px` }}
			alt="bag of lay's chips"
		/>
	));
	return (
		<div className="Chips">
			<Message>
				<h1>bags eaten: {bags.length}</h1>
				<button onClick={handleClick}>munch</button>
				<h1>
					<Link
						exact
						to="/">
						home
					</Link>
				</h1>
			</Message>
			{b}
		</div>
	);
};

export default Chips;
