import React from "react";
import { useState } from "react";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Preloader from "../Preloader/Preloader";
import SearchForm from "../SearchForm/SearchForm";
import "./Movies.css";

function Movies() {
  const [renderLoading, setRenderLoading] = useState(false);

  function handleRenderLoading() {
    setRenderLoading(true);
  }

  return (
    <div className="movies">
      <SearchForm />
      {renderLoading ? <Preloader /> : null}
      <MoviesCardList />
    </div>
  );
}
export default Movies;
