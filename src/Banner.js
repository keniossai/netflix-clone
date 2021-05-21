import React, { useState, useEffect } from 'react'
import axios from './axios'
import requests from './requests'

import './Banner.css'

function Banner() {
	const [movie, setMovie] = useState([])

	useEffect(() => {
		async function fetchData() {
			const request = await axios.get(requests.fetchNetflixOriginal)
			setMovie(
				request.data.results[Math.floor(Math.random() * request.data.results.length - 1)]
			)
			return request
		}
		fetchData()
	}, [])

	console.log(movie)
	return (
		<header
			className='banner'
			style={{
				backgroundSize: 'cover',
				backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
				backgroundPosition: 'center center',
			}}
		>
			<div className='banner-contents'>
				{/* Title */}
				<h1>{movie?.title || movie?.name || movie?.original_name}</h1>
			{/* div > 2 buttons */}
				<div className='banner-buttons'>
					<button className='banner-button'>Play</button>
					<button className='banner-button'>My List</button>
				</div>
			{/* Description */}
                <h1 className="banner-description">{movie?.overview}</h1>
			</div>
		</header>
	)
}

export default Banner