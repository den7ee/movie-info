import React from "react";
import { MovieControls } from "./MovieControls";
import Moment from "react-moment";

export const MovieCard = ({ movie, type }) => {
  return (
    <div className="movie-card">
      <div className="overlay"></div>

      <img
        src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
        alt={`${movie.title} Poster`}
      />

      <div className="">
          <h3 className="title">{movie.title}</h3>
          <h4 className="release-date">
            <Moment format="YYYY">{movie.release_date}</Moment>
          </h4>
          <p>{movie.overview}</p>
      </div>

      <MovieControls type={type} movie={movie} />
    </div>
  );
};
