import React from "react";
import { NavLink } from "react-router-dom";
import ProfileLog from "../ProfileLog/ProfileLog";
import "./BurgerMenu.css";

function BurgerMenu({ isOpen, onClose }) {
  return (
    <div className={`burger ${isOpen && "burger_opened"}`}>
      <div className="burger__container">
        <button className="burger__close" onClick={onClose} type="button" />
        <nav className="burger__links">
          <NavLink
            to="/"
            className="navigation__link burger__link"
            title="Главная"
          >
            Главная
          </NavLink>
          <NavLink
            to="/movies"
            className="navigation__link burger__link"
            title="Фильмы"
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className="navigation__link burger__link"
            title="Сохраненные фильмы"
          >
            Сохраненные фильмы
          </NavLink>
        </nav>
        <ProfileLog />
      </div>
    </div>
  );
}

export default BurgerMenu;
