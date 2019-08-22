import React, { useContext } from "react";
import { MoviesContext } from "./MoviesContext";
import MovieDetails from "./MovieDetails";

const MoviesList = () => {
  const { myMovies } = useContext(MoviesContext);

  console.log(myMovies);
  return (
    <>
      {myMovies.map(movie => (
        <MovieDetails movie={movie} key={movie.id} />
      ))}
    </>
  );
};

export default MoviesList;
