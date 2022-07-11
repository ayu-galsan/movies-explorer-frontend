import { NavLink } from "react-router-dom";
import burgerIcon from "../../images/burger-image.svg";
import ProfileLog from "../ProfileLog/ProfileLog";
import "./Navigation.css";

function Navigation({ openBurgerMenu }) {
  return (
    <nav className="navigation">
      <ul className="navigation__movies">
        <NavLink
          to="/movies"
          className="navigation__link navigation__link_type_movies"
          title="Фильмы"
        >
          Фильмы
        </NavLink>
        <NavLink
          to="/saved-movies"
          className="navigation__link navigation__link_type_movies"
          title="Сохраненные фильмы"
        >
          Сохраненные фильмы
        </NavLink>
      </ul>
      <ul className="navigation__profile">
        <ProfileLog />
      </ul>
      <button
        className="navigation__burger-menu"
        onClick={openBurgerMenu}
        type="button"
      >
        <img className="navigation__burger-icon" src={burgerIcon} alt="Меню" />
      </button>
    </nav>
  );
}
export default Navigation;
