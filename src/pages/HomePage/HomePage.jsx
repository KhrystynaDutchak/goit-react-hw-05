import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../../movies-api'; 
import MovieList from '../../components/MovieList/MovieList';

function HomePage() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getTrendingMovies(); 
        setTrendingMovies(data.results); 
      } catch (error) {
        setError(error); 
      }
    };

    fetchData();
  }, []);

  return (
    <div className='main'>
      <h1>Trending Movies</h1>
      {error && <p>Error: {error.message}</p>}
      <MovieList movies={trendingMovies} /> 
    </div>
  );
}

export default HomePage;
