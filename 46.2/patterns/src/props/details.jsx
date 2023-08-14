import React from "react";
import { Link, Navigate } from "react-router-dom";
import "../styles/details.css";

const DogDetails = ({ dog }) => {
	if (!dog) return <Navigate to={"/dogs"} />;
	return (
		<div className="DogDetails">
			<div>
				<img
					src={dog.src}
					alt={dog.name}
				/>
				<h2>{dog.name}</h2>
				<h3>{dog.age}</h3>
				<ul>
					{dog.facts.map((fact, i) => (
						<li key={i}>{fact}</li>
					))}
				</ul>
				<Link to="/dogs">home</Link>
			</div>
		</div>
	);
};

export default DogDetails;
