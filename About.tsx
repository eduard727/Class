import React, { useEffect, useState } from 'react';
import { Calculator } from './Calculator/Calculator';
import { Link } from "react-router-dom";
import axios, { Axios } from 'axios';


export const About = () => {
	
	const API_URL_UPCOMING = 'https://api.themoviedb.org/3/movie/550?api_key=54da900eb024ae96561bb57b4a6a9ee5'
	const API_URL_TOP_RATED_TV_SHOWS = 'https://api.themoviedb.org/3/tv/top_rated?api_key=54da900eb024ae96561bb57b4a6a9ee5&language=en-US&page=1'


	const [movies, setMovies] = useState([]);
	const [rating, setRating] = useState(0);
	// Busca datos hasta que se haya cargado el componente completamente

	useEffect(() => {
		const fetchData = async () => {
			const { data } = await axios.get(API_URL_TOP_RATED_TV_SHOWS);
			const filteredUpcomnigMovies = data.results.map( (movie: { name: any; overview: any; id: any; vote_average: any; poster_path: any; }) => 
			{
				return {
					name: movie.name,
					description: movie.overview,
					id: movie.id,
					rating:movie.vote_average,
					poster:movie.poster_path
				}
			});
			setMovies(filteredUpcomnigMovies);
		};

	fetchData();
	}, []);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = parseInt(e.target.value);
		setRating(value);
	}
	const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const user = {
			name:rating
		};

		const request = await axios.post('URL_POST', user);
		console.log(`POST`, request);
	}
	
	console.log(movies);
	return <>
		{/* <Calculator/> */}
		{/* <Link to='/'> Back to Home</Link> */}

		{/* <form onSubmit={(e) => handleSubmit(e)}>
			<label>Name: </label>
			<input type='number' name='name' onChange={(e) => handleChange(e)} />
			<button type='submit'>Add</button>
		</form> */}

		<div className='movie'>
		{movies.map( (movie:any) => ( 
			<div key={movie.id}>
				<h1>{movie.name}</h1>
				<p>{movie.description}</p>
				<span>rating {movie.rating}</span>
				<p>{movie.poster}</p>
				<img src={'https://image.tmdb.org/t/p/w500/'+movie.poster}></img>
				<p>-------------------</p>
			</div>))}
		</div>
	</>
}