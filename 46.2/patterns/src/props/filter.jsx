import React from "react";
import { useParams } from "react-router-dom";
import DogDetails from "./details";

const Filter = ({ dogs }) => {
	const { name } = useParams();
	if (name) {
		const current = dogs.find(
			(dog) => dog.name.toLowerCase() === name.toLowerCase()
		);
		return <DogDetails dog={current} />;
	}
	return null;
};

export default Filter;
