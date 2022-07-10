import React from "react";
import { useLocation } from "react-router-dom";
import MoviesDeleteButton from "../MoviesDeleteButton/MoviesDeleteButton";
import MoviesSaveButton from "../MoviesSaveButton/MoviesSaveButton";
import "./MoviesCard.css";

function MoviesCard() {
  const location = useLocation();

  function handleSaveButton() {
    if (location.pathname === "/movies") {
      return <MoviesSaveButton />;
    } else if (location.pathname === "/saved-movies") {
      return <MoviesDeleteButton />;
    }
  }

  return (
    <li className="movies-card">
      <div className="movies-card__container">
        <div className="movies-card__text-container">
          <h2 className="movies-card__title">33 слова о дизайне</h2>
          <p className="movies-card__subtitle">1ч 47м</p>
        </div>
        {handleSaveButton()}
      </div>
      <img
        className="movies-card__image"
        src="https://avatars.mds.yandex.net/i?id=99a355ff6f51611049f482eea381a39e-4377652-images-thumbs&n=13"
        alt="Картинка с фильмом"
      />
    </li>
  );
}

export default MoviesCard;
