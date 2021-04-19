import React from 'react';
import Banner from '../Banner';
import Navbar from '../Navbar';
import Row from '../Row';
import requests from '../Requests';
function Homepage() {
  return (
    <div className='homepage'>
      <Navbar />
      <Banner />
      <Row
        title='Netflix Originals'
        fetchUrl={requests.fetchNetflixoriginals}
        isLarge
      />
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} />
      <Row title='Top Rated' fetchUrl={requests.fetchTopRated} />
      <Row title='Action Movies' fetchUrl={requests.fetchActionMovies} />
      <Row title='Comedy Movies' fetchUrl={requests.fetchComedyMovies} />
      <Row title='Horror Movies' fetchUrl={requests.fetchHorrorMovies} />
      <Row title='Romance Movies' fetchUrl={requests.fetchRomanceMovies} />
      <Row title='Documentaries' fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default Homepage;
