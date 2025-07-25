import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";

function Movie() {
  const[ movie, setMovie ] = useState(null);
  const { id } = useParams();

  useEffect(() => {
     fetch(`http://localhost:4000/movies/${id}`)
     .then((res) => res.json())
     .then((data) =>  setMovie(data))
     .catch((err) => {console.error("failed to get movie", err);
      setMovie(undefined);
     });
  }, [id]);

  if (movie === null){
    return <p>loading... </p>
  }

  if (movie === undefined) {
  return <p>Not found</p>
  }
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
