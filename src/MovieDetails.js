import React, { useContext } from "react";
import { MoviesContext } from "./MoviesContext";

const MovieDetails = ({ movie }) => {
  const { myMovies, toggleWatched, toggleLiked } = useContext(MoviesContext);

  const displayComma = arr => {
    arr.map((x, i) => {
      console.log(x, i, arr.length);
      if (i === arr.length - 1) {
        console.log(i);
        return x + ", ";
      } else {
        return x;
      }
    });
  };

  return (
    <div className="MovieDetails">
      <div>
        <h1>
          {movie.title} <span style={{fontSize: 20}}>({movie.year})</span>
        </h1>
        <h3>Reżyseria: {movie.director}</h3>
        <h5>Scenariusz: {movie.screenplay.map(x => x).join(", ")}</h5>
        <p><span style={{fontWeight: 700}}>Występuja: </span>{movie.cast.map(x => x).join(", ")}</p>
        <p><span style={{fontWeight: 700}}>Gatunek: </span>{movie.genre.map(y => y).join(", ")}</p>
      </div>
      <div>
        <img src={movie.images} className="MovieDetails-Poster" alt="Movie Poster" />
      </div>
      <div>
        <div className="MovieDetails-Status">
        <div>
        <h3>Status</h3>
        </div>
          <div>
            {/* <i className="fas fa-check" style={{display: "block"}}></i> */}
            <i
              className={movie.watched ? "fas fa-check" : "fas fa-times"}
              style={movie.watched ? { color: "green" } : { color: "red" }}
              onClick={() => toggleWatched(movie.id)}
            />
            {/* <i class="fas fa-times"></i> */}
          </div>
          <div>
            <i
              className={
                movie.liked ? "far fa-thumbs-up" : "far fa-thumbs-down"
              }
              style={movie.liked ? { color: "green" } : { color: "red" }}
              onClick={() => toggleLiked(movie.id)}
            />
            {/* <i className="far fa-thumbs-up"></i>
      <i class="far fa-thumbs-down"></i> */}
          </div>
        </div>
        {/* <button onClick={() => toggleWatched(movie.id)}>
          {movie.watched ? "Obejrzany" : "Czeka na seans"}
        </button> */}
      </div>
    </div>
  );
};

export default MovieDetails;
