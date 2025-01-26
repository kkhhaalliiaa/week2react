import React, {useEffect, useState, useRef} from 'react'
import "./Movie.css"
export default function Movie() {

const [movie, setMovie] = useState({});
const [query, setQuery] = useState('');
const [searched, setSearched] = useState(false);
const input = useRef(null);

const getQuery = (e) =>{
    e.preventDefault();
    let newQuery = input.current.value;
    setQuery(newQuery);
    setSearched(true);
}

const goBack = () => {
    setSearched(false);
        setQuery(''); // Clear the search query
    setMovie({}); // Clear the movie data
};

useEffect(()=>{
    const url = `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`;
    const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization:  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ODczOTZiMzEwNDVlNWI5NTUzNTM3MGIyODI5Y2MwOSIsIm5iZiI6MTczNDUzOTQyOS45OTksInN1YiI6IjY3NjJmOGE1NjdjOTYzMjE4MDRhMmM0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.qsaXSuFsln7-vVKs0bumcZCBTcIM9vMi6EBeqx1_iH0"
    }
    };

    fetch(url, options)
    .then(res => res.json())
    .then(json => setMovie(json.results[0]))
    .catch(err => console.error(err));
}, [query])

return (
    <div className="main-content">
    {!searched && (
        <form onSubmit={getQuery} className="form">
        <h1 className="form-title">Search for a movie:</h1>
        <input
            type="text"
            ref={input}
            placeholder="Moana 2"
            className="input"
        />
        <button type="submit" className="button"> Search</button>
        </form>
    )}

      {/* Display the placeholder or movie details */}
    {!movie ? (
    !searched && (
        <p className="placeholder">Search for a movie to see its details!</p>
        )
    ) : (
        <div className="card">
        <div className="card-img">
            <img
            src={`https://media.themoviedb.org/t/p/w440_and_h660_face/${movie.poster_path}`}
            alt={movie.title}
            className="poster"
            />
        </div>
        
        <div className="card-content">
            <h2 className="card-title">{movie.title}</h2>
            <h4 className="card-date">Released Date: {movie.release_date}</h4>
            <p className="card-overview">{movie.overview}</p>
        </div>
        </div>
    )}

      {/* Show the back button if a search was made */}
    {searched && (
        <button className="button" onClick={goBack}>Back</button>
    )}
    </div>
);
}