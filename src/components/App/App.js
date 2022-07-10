import { Route, Routes, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import "./App.css";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import BurgerMenu from "../BurgerMenu/BurgerMenu";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Profile from "../Profile/Profile";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Movies from "../Movies/Movies";
import "./App.css";
import SavedMovies from "../SavedMovies/SavedMovies";

function App() {
  const [loggedIn, setLoggedIn] = useState(true);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const navigate = useNavigate();

  function openBurgerMenu() {
    setIsBurgerMenuOpen(true);
  }

  function closePopups() {
    setIsBurgerMenuOpen(false);
  }

  function handleSignOut() {
    setLoggedIn(false);
    navigate("/");
  }

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Header islogged={loggedIn} openBurgerMenu={openBurgerMenu} />
              <Main />
              <Footer />
            </>
          }
        />
        <Route path="/signup" element={<Register />} />
        <Route path="/signin" element={<Login />} />
        <Route
          path="/profile"
          element={
            <>
              <Header islogged={loggedIn} openBurgerMenu={openBurgerMenu} />
              <Profile signOut={handleSignOut}/>
            </>
          }
        />
        <Route
          path="/movies"
          element={
            <>
              <Header islogged={loggedIn} openBurgerMenu={openBurgerMenu} />
              <Movies />
              <Footer />
            </>
          }
        />
        <Route
          path="/saved-movies"
          element={
            <>
              <Header islogged={loggedIn} openBurgerMenu={openBurgerMenu} />
              <SavedMovies />
              <Footer />
            </>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <BurgerMenu isOpen={isBurgerMenuOpen} onClose={closePopups} />
    </div>
  );
}

export default App;
