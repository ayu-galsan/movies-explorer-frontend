import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  DESKTOP_SIZE,
  TABLET_SIZE,
} from "../../utils/constants";
import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList({
  movies,
  windowWidth,
  onSaveMovie,
  onDeleteMovie,
  savedMovies,
}) {
  const location = useLocation().pathname;
  const [moviesList, setMoviesList] = useState([]);
  const [moviesCount, setMoviesCount] = useState(12);
  const [addMoviesCount, setAddMoviesCount] = useState(0);
  const [isButtonActive, setIsButtonActive] = useState(false);

  React.useEffect(() => {
    if (windowWidth >= DESKTOP_SIZE) {
      setMoviesCount(12);
      setAddMoviesCount(3);
    } else if (windowWidth < DESKTOP_SIZE && windowWidth > TABLET_SIZE) {
      setMoviesCount(8);
      setAddMoviesCount(2);
    } else {
      setMoviesCount(5);
      setAddMoviesCount(2);
    }
  }, [windowWidth]);

  function handleMoreClick() {
    setMoviesList(movies.slice(0, moviesList.length + addMoviesCount));
    if (moviesList.length >= movies.length - addMoviesCount) {
      setIsButtonActive(false);
    }
  }

  React.useEffect(() => {
    if (location === "/movies") {
      setMoviesList(movies.slice(0, moviesCount));
      if (movies.length <= moviesCount) {
        setIsButtonActive(false);
      } else {
        setIsButtonActive(true);
      }
    } else {
      setMoviesList(movies);
      setIsButtonActive(false);
    }
  }, [movies, moviesCount, location]);

  return (
    <div className="movies-card-list">
      <ul className="movies-card-list__item">
        {moviesList.map((movie) => {
          return (
            <MoviesCard
              key={location === "/saved-movies" ? movie._id : movie.id}
              data={movie}
              onSaveMovie={onSaveMovie}
              onDeleteMovie={onDeleteMovie}
              savedMovies={savedMovies}
            />
          );
        })}
      </ul>
      <button
        className={`movies-card-list__more ${
          isButtonActive && "movies-card-list__more_visible"
        }`}
        type="button"
        onClick={handleMoreClick}
      >
        Ещё
      </button>
    </div>
  );
}

export default MoviesCardList;
