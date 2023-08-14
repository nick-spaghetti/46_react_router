import React from "react";
import Message from "./msg";
import { Link } from "react-router-dom";
import machineImg from "../styles/VendingMachine.png";
import "../styles/machine.css";

const Machine = () => {
	return (
		<div
			className="VendingMachine"
			style={{ backgroundImage: `url(${machineImg})` }}>
			<Message>
				<h1>hi im vender</h1>
			</Message>
			<Message>
				<h1>
					<Link
						exact
						to="/soda">
						soda
					</Link>
				</h1>
				<h1>
					<Link
						exact
						to="/chips">
						chips
					</Link>
				</h1>
				<h1>
					<Link
						exact
						to="/cookies">
						cookies
					</Link>
				</h1>
			</Message>
		</div>
	);
};

export default Machine;
