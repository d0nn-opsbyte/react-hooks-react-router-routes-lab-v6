import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  
  return (
    <div className='movie-card'>
        <h2>{movie.title}</h2>
        <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
    </div>
  );
};

export default MovieCard;