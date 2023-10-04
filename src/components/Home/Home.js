import React, { useEffect } from "react";
import { movieApi } from "../../common/apis/movieApi";
import { APIKey } from "../../common/apis/MovieApiKey";
import MovieListings from "../MovieListings/MovieListings";
import { useDispatch } from "react-redux";
import { addMovie } from "../../features/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovieData = async () => {
      const response = await movieApi
        .get(`?apikey=${APIKey}&type=movie&s=house`)
        .catch((err) => {
          console.log("Err", err);
        });

      dispatch(addMovie(response.data.Search));
    };
    fetchMovieData();
  }, [dispatch]);

  return (
    <div>
      <div className="banner-img"></div>
      <MovieListings />
    </div>
  );
};

export default Home;
