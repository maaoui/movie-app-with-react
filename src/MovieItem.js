import React from "react";

const MovieCard = props => {
  return (
    <div className="movie-frame">
      <div className="movie-rating">{props.movie.rate}</div>
      <div className="movie-picture">
        <img
          className="movie-picture-poster"
          src={props.movie.picture}
          alt=""
        />
      </div>
      <div className="movie-title">{props.movie.filmName}</div>
    </div>
  );
};
export default MovieCard;
