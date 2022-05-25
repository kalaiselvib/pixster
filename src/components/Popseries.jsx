/** @format */

import React from "react";
import { Link } from "react-router-dom";
function Popseries({ series }) {
  return (
    <div className="">
      <h3 className="text-white ml-1 my-3">Trending Series</h3>
      <div className="latest-section">
        {series.map((item) => {
          return (
            <Link
              className="card"
              key={item.id}
              to={"/pop-series-detail/" + item.id}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                alt={item.original_title}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Popseries;
