/** @format */

import React, { useState, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import { Link } from "react-router-dom";

function Sidebar({ icons }) {
  const [genreNames, setGenrenames] = useState([]);

  useEffect(() => {
    getGenres();
  }, []);
  const getGenres = async () => {
    const API_URL = `https://api.themoviedb.org/3/genre/movie/list?api_key=ed0c274ddccfadebcca4c73c3088388a`;
    const options = {
      method: "GET",
    };
    const response = await fetch(API_URL, options);
    const data = await response.json();
    const result = data.genres;
    setGenrenames(result);
  };
  return (
    <div className="sidebar-wrapper">
      <div className="nav-icon">
        <HiMenu className="toggleMenuIcon m-1" />
        <div className="menusList">
          <div className="menu-item">
            <div className="icons">
              {icons.map((icon) => {
                return (
                  <div key={icon.id} className="pl-2 menu-item-icon">
                    {icon.iconName}
                  </div>
                );
              })}
            </div>

            <div className="names text-white">
              {genreNames.map((genreItem) => {
                return (
                  <Link
                    key={genreItem.id}
                    className="pl-2 menu-item-name text-white"
                    to={"/movie-category/" + genreItem.id}
                  >
                    {genreItem.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
