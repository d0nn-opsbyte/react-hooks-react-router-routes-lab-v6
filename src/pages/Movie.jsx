import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const[ movie, setMovie ] = useState(null);
  const params = useParams();

  useEffect(() => {
     fetch(`http://localhost:4000/movies/${params.id}`)
     .then((res) => res.json())
     .then((data) => {
      setMovie(data);
     });
  }, [params.id]);

  return (
    <>
      <header>
       <NavBar />
      </header>
      <main>
       <h1>{movie.title}</h1>
       <p>{movie.time}</p>
       {movie.genres.map((genre, index) => (
        <span key={index}>{genre}</span>
       ))}
      </main>
    </>
  );
};

export default Movie;
