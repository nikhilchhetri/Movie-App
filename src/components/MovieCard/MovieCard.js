import React from "react";
import "./MovieCard.scss";

const MovieCard = ({ Poster, Title, Year }) => {
  return (
    <div className="card-item">
      <div className="card-inner">
        <div className="card-top">
          <img src={Poster} alt={Title} />
        </div>
        <div className="card-bottom">
          <div className="card-info">
            <h4>{Title}</h4>
            <p>{Year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
