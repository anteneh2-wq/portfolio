// File: App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import About from "./About";
import Skills from "./Skills";
import Projects from "./Projects";
import Contact from "./Contact";
import Resume from "./Resume";

function App() {
	return (
		<Router>
			<div className="App">
				<Header />
				<Routes>
					<Route path="/" element={<About />} />
					<Route path="/Footer" element={<Footer />} />

					<Route path="/skills" element={<Skills />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/header" element={<Header />} />
					<Route path="/resume" element={<Resume />} />
				</Routes>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
