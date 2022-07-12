import React from "react";
import { useState } from "react";
import Preloader from "../Preloader/Preloader";
import SavedMoviesCardList from "../SavedMoviesCardList/SavedMoviesCardList";
import SearchForm from "../SearchForm/SearchForm";
import "./SavedMovies.css";

function SavedMovies() {
  const [renderLoading, setRenderLoading] = useState(false);

  function handleRenderLoading() {
    setRenderLoading(true);
  }

  return (
    <div className="movies">
      <SearchForm />
      {renderLoading ? <Preloader /> : null}
      <SavedMoviesCardList />
    </div>
  );
}
export default SavedMovies;
