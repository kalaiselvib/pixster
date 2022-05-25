/** @format */

import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function MovieCategory() {
  const [genreMovies, setGenreMovies] = useState([]);
  let params = useParams();
  useEffect(() => {
    getGenreMovies();
  }, []);
  const getGenreMovies = async () => {
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=ed0c274ddccfadebcca4c73c3088388a&${params.id}`;
    const options = {
      method: "GET",
    };

    const response = await fetch(url, options);
    const data = await response.json();

    const results = data.results;
    setGenreMovies(results);
    console.log(results);
  };
  return <div className="main-wrapper text-white">gf</div>;
}

export default MovieCategory;
