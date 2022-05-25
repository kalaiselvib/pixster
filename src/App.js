/** @format */

import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MenuIcons from "./components/MenuIcons";
import "./Utilities.css";

import PopMovieDetail from "./components/PopMovieDetail";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import MovieCategory from "./components/MovieCategory";

import Homepage from "./components/Homepage";
import PopSeriesDetail from "./components/PopSeriesDetail";

function App() {
  const [icons] = useState(MenuIcons);
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularSeries, setPopularSeries] = useState([]);

  useEffect(() => {
    getPopularMovies();
    getPopularSeries();
  }, []);

  const getPopularMovies = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/popular?api_key=ed0c274ddccfadebcca4c73c3088388a";
    const options = {
      method: "GET",
    };

    const response = await fetch(url, options);
    const data = await response.json();

    const results = data.results;
    setPopularMovies(results);
  };
  const getPopularSeries = async () => {
    const url =
      "https://api.themoviedb.org/3/tv/popular?api_key=ed0c274ddccfadebcca4c73c3088388a";
    const options = {
      method: "GET",
    };

    const response = await fetch(url, options);
    const data = await response.json();

    const results = data.results;
    setPopularSeries(results);
  };
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Sidebar icons={icons} />
        <Routes>
          <Route
            exact
            path="/pixster"
            element={<Homepage movies={popularMovies} series={popularSeries} />}
          />
          <Route
            path="/pop-movie-detail/:id"
            element={<PopMovieDetail movies={popularMovies} />}
          />
          <Route
            path="/pop-series-detail/:id"
            element={<PopSeriesDetail series={popularSeries} />}
          />
          <Route path="/movie-category/:id" element={<MovieCategory />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
