import React from "react";
import { Link } from "react-router-dom";
import "../styles/list.css";

const DogList = ({ dogs }) => {
	return (
		<div className="DogList">
			<div>
				<div>
					<h1>welcome!</h1>
				</div>
			</div>
			<div className="container">
				{dogs.map((d) => (
					<div>
						<img
							src={d.src}
							alt={d.name}
						/>
						<h3>
							<Link to={`/dogs/${d.name.toLowerCase()}`}>
								{d.name}
							</Link>
						</h3>
					</div>
				))}
			</div>
		</div>
	);
};

export default DogList;
