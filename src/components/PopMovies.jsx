/** @format */

import React from "react";
import { Link } from "react-router-dom";

function PopMovies({ movies }) {
  return (
    <div className="latest-movies">
      {movies.map((movie) => {
        return (
          <Link
            className="card"
            key={movie.id}
            to={"/pop-movie-detail/" + movie.id}
          >
            <img
              src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.original_title}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default PopMovies;
