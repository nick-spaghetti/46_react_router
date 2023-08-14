import React from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/color.css";

const Color = ({ colors }) => {
	const { color } = useParams();
	const hex = colors[color];

	return (
		<div
			className="Color"
			style={{ backgroundColor: hex }}>
			<p>this is {color}</p>
			<p>• {hex} •</p>
			<p>isn't it beautiful?</p>
			<p>
				<Link to="/colors">go back</Link>
			</p>
		</div>
	);
};

export default Color;
