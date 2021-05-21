import React, { useState, useEffect } from 'react'
import axios from './axios'
import './Row.css'

const base_url = 'https://image.tmdb.org/t/p/original/'

function Row({ title, fetchUrl }) {
	const [movies, setMovies] = useState([])

	// A snippet of code which runs based on a specific condition/Variable
	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(fetchUrl)
			setMovies(request.data.results)
			return request
		}
		fetchData()
	}, [fetchUrl])

	console.log(movies)
	return (
		<div className='row'>
			{/* Title */}
			<h2>{title}</h2>
			<div className='row-posters'>
				{/* Several row posters */}
				{movies.map((movie) => (
					<img
						className='row-poster'
						src={`${base_url}${movie.poster_path}`}
						alt={movie.name}
					/>
				))}
			</div>
			{/* Container posters */}
		</div>
	)
}

export default Row
