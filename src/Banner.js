import React, { useEffect, useState } from 'react';
import './banner.css';
import axios from './Axios';
import requests from './Requests';
function Banner() {
  const truncateDesc = (s, n) => {
    return s?.length > n ? s.substr(0, n - 1) + '...' : s;
  };
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const req = await axios.get(requests.fetchNetflixoriginals);
      setMovie(
        req.data.results[
          Math.floor(Math.random() * req.data.results.length - 1)
        ],
      );
      return req;
    }
    fetchData();
  }, []);
  // console.log(movie);
  return (
    <header
      className='banner'
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <div className='banner__contents'>
        <h1 className='banner__title'>
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className='banner__buttons'>
          <button className='banner__button'>Play</button>
          <button className='banner__button'>My List</button>
        </div>
        <h1 className='banner__description'>
          {truncateDesc(movie?.overview || '', 150)}
        </h1>
      </div>
      <div className='banner--fadeBottom'></div>
    </header>
  );
}

export default Banner;
