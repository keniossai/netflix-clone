const API_KEY = "352315934ffc83008f180c34d0dedc11";


const request = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginal: `/discover/tv/tv?api_key=${API_KEY}&with_networks=123`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    fetchDocumentries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}

export default request





// https://api.themoviedb.org/3/movie/550?api_key=352315934ffc83008f180c34d0dedc11