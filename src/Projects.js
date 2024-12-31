import React from "react";
import "./projects.css";

function Projects() {
	const projects = [
		{
			name: "Portfolio Website",
			description: "A responsive portfolio site.",
			link: "#",
		},
		{
			name: "E-commerce Platform",
			description: "An online shopping site.",
			link: "#",
		},
		{
			name: "Chat Application",
			description: "Real-time chat with WebSockets.",
			link: "#",
		},
	];

	return (
		<section>
			<h1>Projects</h1>
			<div>
				{projects.map((project, index) => (
					<div key={index}>
						<h2>{project.name}</h2>
						<p>{project.description}</p>
						<a href={project.link}>View Project</a>
					</div>
				))}
			</div>
		</section>
	);
}

export default Projects;
