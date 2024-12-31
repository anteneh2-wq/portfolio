import React from "react";
import "./Header.css";

import { Link } from "react-router-dom";

function Header() {
	return (
		<header>
			<nav>
				<ul>
					<li>
						<Link to="/resume">Resume</Link>
					</li>

					<li>
						<Link to="/">About</Link>
					</li>
					<li>
						<Link to="/skills">Skills</Link>
					</li>
					<li>
						<Link to="/projects">Projects</Link>
					</li>
					<li>
						<Link to="/contact">Contact</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;
