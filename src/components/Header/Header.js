import React, { useState } from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import "../Header/Header.scss";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";
import { useDispatch } from "react-redux";
const Header = () => {
  const [searchText, setSearchText] = useState("");
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (searchText === "") {
      return alert("Please enter a search text");
    }
    dispatch(fetchAsyncMovies(searchText));
    dispatch(fetchAsyncShows(searchText));
    setSearchText("");
  };
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">
          <img src="https://img.logoipsum.com/297.svg" alt="Movie-app" />
        </Link>
      </div>
      <div className="search-input">
        <form onSubmit={submitHandler}>
          <input
            type="text"
            placeholder="Search for movies or shows"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button type="submit">search</button>
        </form>
      </div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
  );
};

export default Header;
