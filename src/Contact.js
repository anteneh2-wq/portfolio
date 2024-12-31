import React, { useState } from "react";
import "./Contact.css";

function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({ ...formData, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
		alert("Message Sent! We will get back to you soon.");
	};

	return (
		<section>
			<h1>Contact</h1>
			<form onSubmit={handleSubmit}>
				<label>
					Name:
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
					/>
				</label>
				<br />
				<label>
					Email:
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required
					/>
				</label>
				<br />
				<label>
					Message:
					<textarea
						name="message"
						value={formData.message}
						onChange={handleChange}
						required
					></textarea>
				</label>
				<br />
				<button type="submit">Submit</button>
			</form>
		</section>
	);
}

export default Contact;
