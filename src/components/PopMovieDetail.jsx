/** @format */

import React, { useState, useEffect } from "react";

import { useParams } from "react-router-dom";
function PopMovieDetail() {
  let params = useParams();
  const [details, setDetails] = useState({
    original_title: "",
    overview: "",
    backdrop_path: "",
    original_language: "",
    popularity: null,
    runtime: null,
    tagline: "",
    genres: [{}],
  });
  useEffect(() => {
    getMovieDetails();
  }, []);
  const getMovieDetails = async () => {
    const API_URL = `https://api.themoviedb.org/3/movie/${params.id}?api_key=ed0c274ddccfadebcca4c73c3088388a`;
    const options = {
      method: "GET",
    };
    const response = await fetch(API_URL, options);
    const data = await response.json();

    setDetails({
      original_title: data.original_title,
      overview: data.overview,
      backdrop_path: data.backdrop_path,
      original_language: data.original_language,
      popularity: data.popularity,
      runtime: data.runtime,
      tagline: data.tagline,
      genres: data.genres,
    });
  };

  return (
    <div className="main-wrapper">
      <div className="detail-wrapper">
        <div
          className="banner"
          style={{
            backgroundImage: `url("https://image.tmdb.org/t/p/original/${details.backdrop_path}")`,
          }}
        ></div>
        <div className="movie-details-container">
          <div className="hero-text my-4 px-4">
            <div className="title">
              <h1>{details.original_title}</h1>
            </div>
            <div className="d-flex">
              <p className="small-text pr-4">Run Time : {details.runtime}</p>
              <p className="small-text">
                Language : {details.original_language}
              </p>
            </div>
            <div className="genres-container m-3">
              <ul>
                {details.genres.map((genre) => {
                  return <li key={genre.id}>{genre.name}</li>;
                })}
              </ul>
            </div>
          </div>
          <div className="movie-overview px-5">
            Desciption : {details.overview}
          </div>
        </div>
        <div className="gradient"></div>
      </div>
    </div>
  );
}

export default PopMovieDetail;
