import React from "react";

const Navbar = () => {
	return (
		<nav className="navbar navbar-dark navbar-expand-lg bg-dark fixed-top">
			<div className="container">
				<a className="navbar-brand" href="/">
					ZMovies
				</a>
				<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<a className="nav-link" href="/">
							Popular
						</a>
						<a className="nav-link" href="/">
							Now Playing
						</a>
						<a className="nav-link" href="/">
							Upcoming
						</a>
						<a className="nav-link" href="/">
							Top Rated
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
