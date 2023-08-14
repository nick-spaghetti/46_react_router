import React from "react";
import Message from "./msg";
import { Link } from "react-router-dom";
import sodaImg from "../styles/Soda.png";
import "../styles/soda.css";

const Soda = () => {
	return (
		<div className="Soda">
			<img
				src={sodaImg}
				alt="cola can"
			/>
			<Message>
				<h1>slurp</h1>
				<h1>
					<Link
						exact
						to="/">
						home
					</Link>
				</h1>
			</Message>
			<img
				src={sodaImg}
				alt="cola can"
			/>
		</div>
	);
};

export default Soda;
