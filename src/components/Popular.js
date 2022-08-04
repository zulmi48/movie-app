import { useEffect, useState } from "react";
import axios from "axios";

const Popular = () => {
	const [movies, setMovies] = useState([]);
	useEffect(() => {
		axios
			.get(`https://api.themoviedb.org/3/discover/movie`, {
				params: {
					api_key: "730d8d9a8dfdd0b8f72942a1a250a895",
				},
			})
			.then((response) => {
				setMovies(response.data.results);
			});
	}, []);

	return (
		<div className="container-fluid pb-4 bg-dark">
			<div className="container">
				<h3 className="display-4 text-center pt-3 mb-3 text-light">Popular Movies</h3>
				<div className="row pt-2">
					{movies.map((result, index) => {
						return (
							<div className="col-md-4" key={index}>
								<div className="card p-2 mb-2">
									<img src={`https://image.tmdb.org/t/p/w300/${result.poster_path}`} className="card-img-top" alt="..." />
									<div className="card-body">
										<h5 className="card-title text-center">{result.title}</h5>
										<p className="card-text text-center">{result.overview}</p>
									</div>
									<ul className="list-group list-group-flush">
										<li className="list-group-item">Rating : {result.vote_average}</li>
										<li className="list-group-item">Release Date : {result.release_date}</li>
									</ul>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Popular;
