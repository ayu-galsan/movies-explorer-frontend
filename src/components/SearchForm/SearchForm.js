import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import SearchIcon from "../../images/search-icon.svg";
import "./SearchForm.css";

function SearchForm() {
  function handleSubmit(e) {
    e.preventDefault();
  }
  return (
    <div className="search-form">
      <form className="search-form__container" onSubmit={handleSubmit}>
        <input className="search-form__input" placeholder="Фильм" required />
        <button className="search-form__button" type="submit">
          <img className="search-form__image" src={SearchIcon} alt="Поиск" />
        </button>
      </form>
      <FilterCheckbox />
    </div>
  );
}

export default SearchForm;
