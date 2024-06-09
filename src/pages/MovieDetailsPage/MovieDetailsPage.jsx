import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate, useLocation, Outlet } from 'react-router-dom';
import { getMovieDetails } from '../../movies-api';
import css from './MovieDetailsPage.module.css';

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const details = await getMovieDetails(movieId);
        setMovieDetails(details);
      } catch (error) {
        setError(error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const handleGoBack = () => {
    if (location.state?.from) {
      navigate(location.state.from);
    } else {
      navigate('/movies');
    }
  };

  if (!movieDetails) return <p>Loading...</p>;

  return (
    <div className='main'>
      <button onClick={handleGoBack}>Go back</button>
      <div className={css.container}>
        {error && <p>Error: {error.message}</p>}
        <div className={css.image}>
          <img src={`https://image.tmdb.org/t/p/w500/${movieDetails.poster_path}`} alt={movieDetails.title} />
        </div>
        <div className={css.details}>
          <h2>{movieDetails.title}</h2>
          <p>User Score: {movieDetails.vote_average}</p>
          <p>Overview: {movieDetails.overview}</p>
          <p>Genres: {movieDetails.genres.map(genre => genre.name).join(', ')}</p>
        </div>
        </div>
        <nav className={css.linkWrp}>
          <Link to="cast" state={{ from: location.state?.from }} className={css.detailLink}>Cast</Link>
          <Link to="reviews" state={{ from: location.state?.from }} className={css.detailLink}>Reviews</Link>
        </nav>
      
      <Outlet />
    </div>
  );
};

export default MovieDetailsPage;
