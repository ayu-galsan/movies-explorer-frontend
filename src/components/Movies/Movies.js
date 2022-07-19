import React from "react";
import { useState } from "react";
import { messageErrorTextServer, SHORT_MOVIES } from "../../utils/constants";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";

function Movies({
  onSearchMovies,
  searchQuery,
  setSearchQuery,
  renderLoading,
  isServerError,
  movies,
  onSaveMovie,
  onDeleteMovie,
  savedMovies,
}) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isFilter, setIsFilter] = useState(false);

  const filterShortMovies = (moviesList) =>
    moviesList.filter((movie) => movie.duration < SHORT_MOVIES);

  function onFilterMovies() {
    setIsFilter(!isFilter);
  }

  React.useEffect(() => {
    if (localStorage.getItem("checkbox")) {
      localStorage.getItem("checkbox") === "false"
        ? setIsFilter(isFilter)
        : setIsFilter(!isFilter);
    } else {
      setIsFilter(isFilter);
    }
  }, []);

  function changeWidth() {
    setWindowWidth(window.innerWidth);
  }

  React.useEffect(() => {
    window.addEventListener("resize", changeWidth);
    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  });

  return (
    <div className="movies">
      <SearchForm
        onSearchMovies={onSearchMovies}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleCheckbox={onFilterMovies}
      />
      {renderLoading ? <Preloader /> : null}
      {isServerError ? (
        <div className="movies__err">{messageErrorTextServer}</div>
      ) : (
        <MoviesCardList
          movies={isFilter ? filterShortMovies(movies) : movies}
          windowWidth={windowWidth}
          onSaveMovie={onSaveMovie}
          onDeleteMovie={onDeleteMovie}
          savedMovies={savedMovies}
        />
      )}
    </div>
  );
}
export default Movies;
