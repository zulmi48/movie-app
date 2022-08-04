import React from "react";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import Popular from "./components/Popular";

function App(props) {
	return (
		<div>
			<Navbar />
			<Jumbotron />
			<Popular />
		</div>
	);
}

export default App;
