import React from 'react';
import './movie.css';
function Movie({ movie }) {
  const {
    adult,
    backdrop_path,
    poster_path,
    genres,
    imdb_id,
    original_title,
    overview,
    release_date,
    runtime,
    videos,
    vote_average,
    vote_count,
    // popularity,
    // status,
  } = movie;
  const video = videos?.results;
  //   console.log(movie);
  const base_url = `https://image.tmdb.org/t/p/original/`;
  return (
    <div className='movie'>
      <div className='movie__details'>
        <img
          src={`${base_url}${
            window.innerWidth > 990 ? poster_path : backdrop_path
          }`}
          alt={original_title}
          className='movie__poster'
        />
        <div className='movie__info'>
          {adult && <button className='movie__button'>Adult</button>}
          {imdb_id && (
            <a
              href={`http://www.imdb.com/title/${imdb_id}/`}
              target='_blank'
              rel='noopener noreferrer'
            >
              <button className='movie__imdb'>IMDb</button>
            </a>
          )}
          <table style={{ width: '100%' }}>
            <tbody>
              <tr>
                <td>
                  <h3>Name</h3>
                </td>
                <td>
                  <button className='movie__button'>{original_title}</button>
                </td>
              </tr>
              <tr>
                <td>
                  <div style={{ minWidth: '85px' }}>
                    <h3>Description</h3>
                  </div>
                </td>
                <td>
                  <span>{overview}</span>
                </td>
              </tr>
              <tr>
                {genres && (
                  <>
                    <td>Genres</td>
                    <td>
                      {genres?.map((genre, i) => {
                        return (
                          <button className='movie__button' key={i}>
                            {genre.name}
                          </button>
                        );
                      })}
                    </td>
                  </>
                )}
              </tr>
              <tr>
                <td>
                  <h3>Released On</h3>
                </td>
                <td>
                  <button className='movie__button'>{release_date}</button>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Runtime</h3>
                </td>
                <td>
                  <button className='movie__button'>{runtime} mins.</button>
                </td>
              </tr>
              <tr>
                <td>
                  <h3>Rating</h3>
                </td>
                <td>
                  <button className='movie__button'>
                    <span
                      style={{
                        borderBottom: '1px solid #fff',
                      }}
                    >
                      {vote_average} / 10 <br />
                    </span>

                    {vote_count}
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className='movie__trailer'>
        {video && (
          <iframe
            src={`https://www.youtube.com/embed/${video[0]?.key}`}
            frameBorder='0'
            width='100%'
            height='100%'
            title={original_title}
          ></iframe>
        )}
      </div>
    </div>
  );
}

export default Movie;
