/** @format */

import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import MenuIcons from "./components/MenuIcons";
import "./Utilities.css";

import PopMovieDetail from "./components/PopMovieDetail";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

import PopMovies from "./components/PopMovies";

function App() {
  const [icons] = useState(MenuIcons);
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    gettPopularMovies();
  }, []);

  const gettPopularMovies = async () => {
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

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Sidebar icons={icons} />
        <div className="main-wrapper">
          <PopMovies movies={popularMovies} />
        </div>
        <Routes>
          <Route
            path="/pop-movie-detail/:id"
            element={<PopMovieDetail movies={popularMovies} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
