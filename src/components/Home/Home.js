import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
import MovieListings from "../MovieListings/MovieListings";
import "./Home.scss"; // Import the SCSS file

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch]);

  return (
    <div className="home-container">
      {" "}
      {/* Apply the "home-container" class */}
      <input type="text" placeholder="Search for movies or shows" />
      <button>Search</button>
      <div className="banner-img"></div>
      <MovieListings />
    </div>
  );
};

export default Home;
