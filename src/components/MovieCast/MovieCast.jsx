import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCredits } from '../../movies-api';
import css from './MovieCast.module.css';

const MovieCast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCredits = async () => {
      try {
        const data = await getCredits(movieId);
        setCredits(data.cast);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCredits();
  }, [movieId]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className={css.cast}>
      {credits.length === 0 ? (
        <p>No cast available</p>
      ) : (
        <ul>
          {credits.map(cast => (
            <li key={cast.cast_id} className={css.castItem}>
              <img
                src={`https://image.tmdb.org/t/p/w200${cast.profile_path}`}
                alt={cast.name}
                style={{ width: '100px', height: '150px', objectFit: 'cover' }}
              />
              <p className={css.castName}>{cast.name}</p>
              <p className={css.castCharacter}>Character: {cast.character}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieCast;
