import React, { useState } from "react";
import { MovieType } from "../../core/dominio/Movie";
import { sendLike } from "../../core/aplicacion/like";

export const Movie = ({ title, year }: MovieType) => {
  const [isLiked, setIsLiked] = useState(false);
  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    sendLike();
  };

  return (
    <div className="movie-card">
      <div className="movie-info">
        <h3 className="movie-title">{title}</h3>
        <p className="movie-year">{year}</p>
      </div>
      <button className="like-button" onClick={handleLikeClick} type="button">
        {isLiked ? "❤️" : "🤍"} Me gusta
      </button>
    </div>
  );
};
