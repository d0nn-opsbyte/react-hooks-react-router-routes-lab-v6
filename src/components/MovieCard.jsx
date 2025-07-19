import React from 'react';
import {Link} from 'react-router-dom';

function MovieCard({title}) {
  
  return (
    <article>
        <h2>{title}</h2>
        <Link to={`/movie/${Movie.id}`}>{Movie.title}</Link>
    </article>
  );
};

export default MovieCard;