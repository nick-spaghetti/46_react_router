import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewColorForm = ({ newColor }) => {
	const [form, setForm] = useState({ name: "", hex: "#000000" });
	const navigate = useNavigate();

	const handleChange = (e) => {
		e.persist();
		setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		newColor({ [form.name]: form.hex });
		navigate("/colors");
	};

	const { hex, name } = form;

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<div>
					<label htmlFor="name">color name</label>
					<input
						type="text"
						name="name"
						id="name"
						placeholder="color name"
						onChange={handleChange}
						value={name}
					/>
				</div>
				<div>
					<label htmlFor="hex">
						<input
							type="color"
							name="hex"
							id="hex"
							onChange={handleChange}
							value={hex}
						/>
					</label>
				</div>
				<input
					type="submit"
					value="add this color"
					readOnly
				/>
			</form>
		</div>
	);
};

export default NewColorForm;
