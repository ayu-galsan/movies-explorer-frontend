import React, { useState } from "react";
import { messageErrorTextServer, SHORT_MOVIES } from "../../utils/constants";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";

function SavedMovies({
  savedMovies,
  onSearchMovies,
  searchQuery,
  setSearchQuery,
  renderLoading,
  isServerError,
  onDeleteMovie,
  isSearchNotSuccessful,
  isSearchSaveMovies,
  allFindSaveMovies,
}) {
  const [isShowSavedMovies, setIsShowSavedMovies] = useState([]);
  const [isFilter, setIsFilter] = useState(false);

  const filterShortMovies = (moviesList) =>
    moviesList.filter((movie) => movie.duration < SHORT_MOVIES);

  function onFilterMovies() {
    setIsFilter(!isFilter);
  }

  React.useEffect(() => {
    setIsShowSavedMovies(savedMovies);
  }, [savedMovies]);

  React.useEffect(() => {
    if (!isSearchSaveMovies) {
      setIsShowSavedMovies(savedMovies);
    } else {
      setIsShowSavedMovies(allFindSaveMovies);
    }
  }, [allFindSaveMovies, isSearchSaveMovies, savedMovies]);

  return (
    <div className="movies">
      <SearchForm
        onSearchMovies={onSearchMovies}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleCheckbox={onFilterMovies}
        isSearchNotSuccessful={isSearchNotSuccessful}
      />
      {renderLoading ? <Preloader /> : null}
      {isServerError ? (
        <div className="movies__err">{messageErrorTextServer}</div>
      ) : (
        <MoviesCardList
          movies={
            isFilter ? filterShortMovies(isShowSavedMovies) : isShowSavedMovies
          }
          onDeleteMovie={onDeleteMovie}
        />
      )}
    </div>
  );
}
export default SavedMovies;
