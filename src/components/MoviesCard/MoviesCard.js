import React from "react";
import { useLocation } from "react-router-dom";
import saveButton from "../../images/movies-save-button.svg";
import activeSaveButton from "../../images/movies-active-save-button.svg";
import closeButton from "../../images/movies-close-button.svg";
import "./MoviesCard.css";
import { MOVIES_URL } from "../../utils/constants";

function MoviesCard({ data, savedMovies, onSaveMovie, onDeleteMovie }) {
  const location = useLocation();
  const isSaved = data.id && savedMovies.some((m) => m.movieId === data.id);

  function handleSaveMovies() {
    if (isSaved) {
      onDeleteMovie(savedMovies.filter((m) => m.movieId === data.id)[0]);
    } else if (!isSaved) {
      onSaveMovie(data);
    }
  }

  function handleDeleteMovies() {
    onDeleteMovie(data);
  }

  function handleChangeButton() {
    if (location.pathname === "/movies") {
      return (
        <button
          className="movies-card-save-button"
          onClick={handleSaveMovies}
          type="button"
        >
          {!isSaved ? (
            <img
              src={saveButton}
              className="movies-card-save-button__image"
              alt="Сохранить"
            />
          ) : (
            <img
              src={activeSaveButton}
              className="movies-card-save-button__image"
              alt="Удалить из сохраненных фильмов"
            />
          )}
        </button>
      );
    } else if (location.pathname === "/saved-movies") {
      return (
        <button
          className="movies-save-button"
          type="button"
          onClick={handleDeleteMovies}
        >
          <img
            src={closeButton}
            alt="Закрыть"
            className="movies-save-button__image"
          />
        </button>
      );
    }
  }

  function calcDuration(time) {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    return hours > 0 ? `${hours}ч ${minutes}м` : `${minutes}м`;
  }

  return (
    <li className="movies-card">
      <div className="movies-card__container">
        <div className="movies-card__text-container">
          <h2 className="movies-card__title">{data.nameRU}</h2>
          <p className="movies-card__subtitle">{calcDuration(data.duration)}</p>
        </div>
        {handleChangeButton()}
      </div>
      <a
        className="movies-card__link"
        href={data.trailerLink}
        target="_blank"
        rel="noreferrer"
      >
        {location.pathname === "/saved-movies" ? (
          <img
            className="movies-card__image"
            src={data.image}
            alt={data.nameRU}
          />
        ) : (
          <img
            className="movies-card__image"
            src={`${MOVIES_URL}${data.image.url}`}
            alt={data.nameRU}
          />
        )}
      </a>
    </li>
  );
}

export default MoviesCard;
