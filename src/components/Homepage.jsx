/** @format */

import React from "react";
import PopMovies from "./PopMovies";
import Popseries from "./Popseries";
function Homepage({ movies, series }) {
  return (
    <div className="main-wrapper">
      <PopMovies movies={movies} />
      <Popseries series={series} />
    </div>
  );
}

export default Homepage;
