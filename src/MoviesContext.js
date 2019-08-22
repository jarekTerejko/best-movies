import React, { useState, createContext, useEffect } from "react";
import { movies } from "./data";

export const MoviesContext = createContext();

const MoviesContextProvider = props => {
  let initialData = JSON.parse(localStorage.getItem("movies")) || movies;
  console.log(initialData);

  console.log(initialData);

  const addProperties = movies => {
    let tempMovies = movies.map(movie => {
      return { ...movie, watched: false, liked: false, id: Math.random() };
    });
    return tempMovies;
  };

  console.log(initialData[0].id);

  if (initialData[0].id === undefined) {
    let moviesUpdated = addProperties(initialData);

    initialData = moviesUpdated;
  }

  const [myMovies, setMyMovies] = useState(initialData);
  console.log(myMovies);

  // useEffect(() => {
  //   localStorage.setItem("movies", JSON.stringify(myMovies));
  // }, [myMovies]);

  const toggleWatched = id => {
    const moviesToToggle = myMovies.map(movie => {
      if (movie.id === id) {
        return { ...movie, watched: !movie.watched };
      }
      return movie;
    });

    setMyMovies(moviesToToggle);
  };

  const toggleLiked = id => {
    const moviesToToggle = myMovies.map(movie => {
      if (movie.id === id) {
        return { ...movie, liked: !movie.liked };
      }
      return movie;
    });

    setMyMovies(moviesToToggle);
  };

  return (
    <MoviesContext.Provider value={{ myMovies, toggleWatched, toggleLiked }}>
      {props.children}
    </MoviesContext.Provider>
  );
};

export default MoviesContextProvider;
