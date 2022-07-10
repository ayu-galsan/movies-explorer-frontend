import React from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import RegisterNav from "../RegisterNav/RegisterNav";
import "./Header.css";

function Header({ islogged, openBurgerMenu }) {
  return (
    <header className="header">
      <Logo />
      {islogged ? (
        <Navigation openBurgerMenu={openBurgerMenu} />
      ) : (
        <RegisterNav />
      )}
    </header>
  );
}
export default Header;
