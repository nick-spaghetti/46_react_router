import React, { useState } from "react";
import Message from "./msg";
import { Link } from "react-router-dom";
import cookieImg from "../styles/Cookie.png";
import "../styles/cookies.css";

const Cookies = () => {
	const [cookies, setCookies] = useState([]);

	function handleClick() {
		const x = window.innerWidth * Math.random();
		const y = window.innerHeight * Math.random();
		setCookies((prevCookies) => [...prevCookies, { x, y }]);
	}

	const c = cookies.map((cookie, i) => (
		<img
			key={i}
			src={cookieImg}
			className="bag"
			style={{ top: `${cookie.y}px`, left: `${cookie.x}px` }}
			alt="cookie"
		/>
	));
	return (
		<div className="Cookies">
			<Message>
				<h1>cookies eaten: {cookies.length}</h1>
				<button onClick={handleClick}>munch</button>
				<h1>
					<Link
						exact
						to="/">
						home
					</Link>
				</h1>
			</Message>
			{c}
		</div>
	);
};

export default Cookies;
