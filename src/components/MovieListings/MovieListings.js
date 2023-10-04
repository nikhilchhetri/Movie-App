import React from "react";
import "../../components/MovieListings/MovieListings.scss";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import "../MovieListings/MovieListings.scss";

const MovieListings = () => {
  const movies = useSelector((state) => state.movies.movies);

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          {movies.map((movie, index) => (
            <MovieCard key={index} {...movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieListings;
