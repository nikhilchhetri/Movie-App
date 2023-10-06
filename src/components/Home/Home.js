import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
  removeSelectedMoviveOrShow,
} from "../../features/movies/movieSlice";
import MovieListings from "../MovieListings/MovieListings";
import "./Home.scss";

const Home = () => {
  const dispatch = useDispatch();
  const movieSearchText = "Avengers";
  const showMovieText = "Breaking";
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieSearchText));
    dispatch(fetchAsyncShows(showMovieText));
    return () => {
      dispatch(removeSelectedMoviveOrShow());
    };
  }, [dispatch]);

  return (
    <div className="home-container">
      <div className="banner-img"></div>
      <MovieListings />
    </div>
  );
};

export default Home;
