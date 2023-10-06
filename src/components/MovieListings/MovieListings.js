import React from "react";
import "../../components/MovieListings/MovieListings.scss";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import "../MovieListings/MovieListings.scss";
import { Link } from "react-router-dom";

const MovieListings = () => {
  const movies = useSelector((state) => state.movies.movies);
  const shows = useSelector((state) => state.movies.shows);

  return movies === undefined || shows === undefined ? (
    <div className="not-found">
      <h1>No results found</h1>
    </div>
  ) : (
    <div>
      <div className="movie-wrapper">
        <div className="movie-list">
          <h2>Movies</h2>
          <div className="movie-container">
            {movies.map((movie) => (
              <Link to={`/movie/${movie.imdbID}`} key={movie.imdbID}>
                <MovieCard key={movie.imdbID} {...movie} />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="movie-wrapper">
        <div className="movie-list">
          <h2>Shows</h2>
          <div className="movie-container">
            {shows.map((show) => (
              <Link to={`/movie/${show.imdbID}`} key={show.imdbID}>
                <MovieCard key={show.imdbID} {...show} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieListings;
