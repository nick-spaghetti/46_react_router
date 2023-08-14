import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

const NavBar = ({ dogs }) => {
	const links = dogs.map((dog) => (
		<NavLink
			key={dog.name}
			to={`/dogs/${dog.name.toLowerCase()}`}>
			{dog.name}
		</NavLink>
	));
	return (
		<nav className="nav">
			<NavLink
				exact
				to="/dogs">
				home
			</NavLink>
			{links}
		</nav>
	);
};

export default NavBar;
