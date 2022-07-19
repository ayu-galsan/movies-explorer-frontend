import React, { useState } from "react";
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import SearchIcon from "../../images/search-icon.svg";
import "./SearchForm.css";
import { messageErrorSearchForm } from "../../utils/constants";

function SearchForm({
  onSearchMovies,
  searchQuery,
  setSearchQuery,
  handleCheckbox,
}) {
  const [notFindMovies, setNotFindMovies] = useState(false);

  function handleChange(e) {
    setSearchQuery(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!searchQuery) {
      setNotFindMovies(true);
    } else {
      setNotFindMovies(false);
      onSearchMovies(searchQuery);
    }
  }

  return (
    <div className="search-form">
      <form
        className="search-form__container"
        onSubmit={handleSubmit}
        noValidate
      >
        <input
          className="search-form__input"
          name="film"
          value={searchQuery || ""}
          placeholder="Фильм"
          required
          onChange={handleChange}
        />
        <button className="search-form__button" type="submit">
          <img className="search-form__image" src={SearchIcon} alt="Поиск" />
        </button>
        {notFindMovies && (
          <span className="search-form__error">{messageErrorSearchForm}</span>
        )}
      </form>
      <FilterCheckbox handleCheckbox={handleCheckbox} />
    </div>
  );
}

export default SearchForm;
