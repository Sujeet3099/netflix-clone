import axios from './Axios';
import React, { useEffect, useState } from 'react';
import requests from './Requests';
import './row.css';
import Movie from './Movie';
function Row({ title, fetchUrl, isLarge = false }) {
  const base_url = `https://image.tmdb.org/t/p/original/`;
  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState({});
  const [thisMovie, setThisMovie] = useState(false);

  const handleMovie = async (movie) => {
    const url =
      title === 'Netflix Originals' ? requests.fetchTv : requests.fetchMovie;
    try {
      const res = await axios.get(url.replace('movie_id', movie.id));
      setThisMovie(true);
      setMovie(res.data);
      // console.log(res.data); // todo commemnt it
    } catch (error) {
      setThisMovie(false);
    }
  };
  useEffect(() => {
    async function fetchData() {
      const res = await axios.get(fetchUrl);
      setMovies(res.data.results);
      return res;
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row__posters'>
        {movies?.map((movie) => {
          return (
            ((isLarge && movie.poster_path) ||
              (!isLarge && movie.backdrop_path)) && (
              <img
                key={movie.id}
                className={`row__poster ${isLarge && 'row__posterLarge'}`}
                src={`${base_url}${
                  isLarge ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
                onClick={() => handleMovie(movie)}
              />
            )
          );
        })}
      </div>
      {thisMovie && <Movie movie={movie} />}
    </div>
  );
}

export default Row;
