import React from "react";
import "./skills.css";

function Skills() {
	const skills = ["JavaScript", "React", "Node.js", "CSS", "MongoDB"];

	return (
		<section>
			<h1>Skills</h1>
			<ul>
				{skills.map((skill, index) => (
					<li key={index}>{skill}</li>
				))}
			</ul>
		</section>
	);
}

export default Skills;
