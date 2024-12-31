import React from "react";
import "./Resume.css";

function Resume() {
	return (
		<section className="resume">
			<h1>My Resume</h1>
			<div className="resume-container">
				<div className="photo">
					<img src="/Anteneh.JPG" alt="Anteneh Beshah" />
				</div>
				<div className="details">
					<h2>Your Name</h2>
					<p>
						<strong>Email:</strong> beshah.anteneh@gmail.com
					</p>
					<p>
						<strong>Phone:</strong> +251920 0757 18
					</p>
					<p>
						<strong>Address:</strong> Addiss Ababa,Ethiopia
					</p>
					<a href="CV-Anteneh AAA" download className="download-btn">
						Download CV
					</a>
				</div>
			</div>
		</section>
	);
}

export default Resume;
