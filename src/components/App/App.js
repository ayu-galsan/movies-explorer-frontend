import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import React, { useCallback, useState } from "react";
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
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import * as mainApi from "../../utils/MainApi";
import * as MoviesApi from "../../utils/MoviesApi";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import { getToken, removeToken, setToken } from "../../utils/token";
import { handleSearch } from "../../utils/utils";
import {
  messageErrorTextUser,
  messageTextUpdateUser,
} from "../../utils/constants";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [isEditSuccess, setIsEditSuccess] = useState(false);
  const [messageInfoText, setMessageInfoText] = useState(false);
  const [infoMessage, setInfoMessage] = useState("");
  const [movies, setMovies] = useState([]);
  const [savedMovies, setSavedMovies] = React.useState([]);
  const [renderLoading, setRenderLoading] = useState(false);
  const [isServerError, setIsServerError] = useState(false);
  const [isSearchMoviesNotSuccessful, setIsSearchMoviesNotSuccessful] =
    useState(false);
  const [isSearchSaveMoviesNotSuccessful, setIsSearchSaveMoviesNotSuccessful] =
    useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [allMovies, setAllMovies] = React.useState([]);
  const [allFindSaveMovies, setAllFindSaveMovies] = React.useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  //получение данных о сохраненных фильмов пользователя при входе
  React.useEffect(() => {
    if (loggedIn) {
      setRenderLoading(true);
      mainApi
        .getSavedMovies()
        .then((moviesData) => {
          setSavedMovies(moviesData);
        })
        .catch((err) => {
          console.log(err);
          setIsServerError(true);
        })
        .finally(() => setRenderLoading(false));
    }
  }, [loggedIn]);

  //получение всех фильмов с api при входе
  React.useEffect(() => {
    MoviesApi.getMovies()
      .then((data) => {
        setAllMovies(data);
      })
      .catch((err) => {
        console.log(err);
        setIsServerError(true);
      });
  }, []);

  //получение данных о пользователе
  React.useEffect(() => {
    if (loggedIn) {
      mainApi
        .getUserData()
        .then((userData) => {
          setCurrentUser(userData);
        })
        .catch((err) => console.log(err));
    }
  }, [loggedIn]);

  //проверка токена
  const tokenCheck = useCallback(() => {
    const token = getToken();
    if (token) {
      mainApi
        .getContent(token)
        .then((res) => {
          if (res) {
            setLoggedIn(true);
            setCurrentUser(res);
            navigate(location.pathname);
          }
        })
        .catch((err) => console.log(err));
    }
  }, []);

  React.useEffect(() => {
    tokenCheck();
  }, [tokenCheck]);

  //регистрация пользователя
  function handleRegister(name, email, password) {
    setRenderLoading(true);
    mainApi
      .register(name, email, password)
      .then(() => {
        handleLogin(email, password);
      })
      .catch((err) => {
        console.log(err);
        setMessageInfoText(true);
      })
      .finally(() => setRenderLoading(false));
  }

  //авторизация пользователя
  function handleLogin(email, password) {
    setRenderLoading(true);
    mainApi
      .authorize(email, password)
      .then((res) => {
        setToken(res.token);
        setCurrentUser(res);
        setLoggedIn(true);
        navigate("/movies");
      })
      .catch((err) => {
        console.log(err);
        setMessageInfoText(true);
      })
      .finally(() => setRenderLoading(false));
  }

  //редактирование пользователя
  function handleUpdateUser(currentUser) {
    mainApi
      .editProfile(currentUser)
      .then((userInfo) => {
        setCurrentUser(userInfo);
        setIsEditSuccess(true);
        setInfoMessage(messageTextUpdateUser);
      })
      .catch((err) => {
        console.log(err);
        setIsEditSuccess(false);
        setInfoMessage(messageErrorTextUser);
      });
  }

  //функция поиска фильмов по запросу searchQuery
  function handleSearchMovies() {
    setRenderLoading(true);
    const delay = setTimeout(() => {
      const foundMovies = handleSearch(allMovies, searchQuery);
      localStorage.setItem("movies", JSON.stringify(foundMovies));
      localStorage.setItem("searchQuery", searchQuery);
      setIsSearchMoviesNotSuccessful(false);
      setMovies(foundMovies);
      isMoviesFind(foundMovies);
      setRenderLoading(false);
      clearTimeout(delay);
    }, 500);
  }

  //эффект сохранения текста запроса при повторном переходе на страницу
  React.useEffect(() => {
    if (location.pathname === "/movies") {
      setSearchQuery(localStorage.getItem("searchQuery"));
    } else {
      setSearchQuery(localStorage.getItem(""));
    }
  }, [location.pathname]);

  //эффект сохранения ранее найденных фильмов при повторном переходе на страницу
  React.useEffect(() => {
    const moviesOnMonitorAfterExit = JSON.parse(
      localStorage.getItem("movies", JSON.stringify(movies))
    );
    if (moviesOnMonitorAfterExit) {
      setMovies(moviesOnMonitorAfterExit);
    } else {
      setMovies([]);
    }
  }, []);

  //функция поиска фильмов в сохраненных фильмах по запросу searchQuery
  function handleSearchSavedMovies() {
    setRenderLoading(true);
    const delay = setTimeout(() => {
      const foundMovies = handleSearch(savedMovies, searchQuery);
      setIsSearchSaveMoviesNotSuccessful(false);
      setAllFindSaveMovies(foundMovies);
      isMoviesFind(foundMovies);
      setRenderLoading(false);
      clearTimeout(delay);
    }, 500);
  }

  //функция определения наличия найденных фильмов
  function isMoviesFind(data) {
    if (data.length === 0) {
      if (location.pathname === "/movies") {
        setIsSearchMoviesNotSuccessful(true);
      } else {
        setIsSearchSaveMoviesNotSuccessful(true);
      }
    }
  }

  //функция сохранения фильмов
  function handleSaveMovie(data) {
    mainApi
      .saveMovie(data)
      .then((movie) => {
        setSavedMovies([movie, ...savedMovies]);
        setAllFindSaveMovies([movie, ...savedMovies]);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  //функция удаления фильмов
  function handleDeleteMovie(data) {
    mainApi
      .deleteMovie(data._id)
      .then(() => {
        setSavedMovies((savedMovies) =>
          savedMovies.filter((movie) => movie._id !== data._id)
        );
        setAllFindSaveMovies((savedMovies) =>
          savedMovies.filter((movie) => movie._id !== data._id)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function openBurgerMenu() {
    setIsBurgerMenuOpen(true);
  }

  function closePopups() {
    setIsBurgerMenuOpen(false);
  }

  function handleSignOut() {
    removeToken();
    localStorage.removeItem("movies");
    localStorage.removeItem("searchQuery");
    localStorage.removeItem("checkbox");
    setLoggedIn(false);
    setMovies([]);
    setSavedMovies([]);
    navigate("/");
  }

  function handleHeaderRoute() {
    const addHeaderRoute = ["/", "/profile", "/movies", "/saved-movies"];
    return addHeaderRoute.map((path, key) =>
      location.pathname === path ? (
        <Header islogged={loggedIn} openBurgerMenu={openBurgerMenu} key={key} />
      ) : null
    );
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        {handleHeaderRoute()}
        <Routes>
          <Route
            exact
            path="/"
            loggedIn={loggedIn}
            element={
              <>
                <Main />
                <Footer />
              </>
            }
          />
          <Route
            path="/signup"
            element={
              loggedIn ? (
                <Navigate to="/" />
              ) : (
                <Register
                  onRegister={handleRegister}
                  messageError={messageInfoText}
                  renderLoading={renderLoading}
                />
              )
            }
          />
          <Route
            path="/signin"
            element={
              loggedIn ? (
                <Navigate to="/" />
              ) : (
                <Login
                  onLogin={handleLogin}
                  messageError={messageInfoText}
                  renderLoading={renderLoading}
                />
              )
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute loggedIn={loggedIn}>
                <Profile
                  signOut={handleSignOut}
                  currentUser={currentUser}
                  onUpdateUser={handleUpdateUser}
                  isEditSuccess={isEditSuccess}
                  infoMessage={infoMessage}
                />
              </PrivateRoute>
            }
          />
          <Route
            path={"/movies"}
            element={
              <PrivateRoute loggedIn={loggedIn}>
                <Movies
                  onSearchMovies={handleSearchMovies}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  renderLoading={renderLoading}
                  isServerError={isServerError}
                  movies={movies}
                  onSaveMovie={handleSaveMovie}
                  onDeleteMovie={handleDeleteMovie}
                  savedMovies={savedMovies}
                  isSearchNotSuccessful={isSearchMoviesNotSuccessful}
                />
                <Footer />
              </PrivateRoute>
            }
          />
          <Route
            path="/saved-movies"
            element={
              <PrivateRoute loggedIn={loggedIn}>
                <SavedMovies
                  savedMovies={savedMovies}
                  handleSearch={handleSearchSavedMovies}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                  renderLoading={renderLoading}
                  isServerError={isServerError}
                  onDeleteMovie={handleDeleteMovie}
                  isSearchNotSuccessful={isSearchSaveMoviesNotSuccessful}
                  allFindSaveMovies={allFindSaveMovies}
                />
                <Footer />
              </PrivateRoute>
            }
          />
          <Route path="*" loggedIn={loggedIn} element={<NotFoundPage />} />
        </Routes>
        <BurgerMenu isOpen={isBurgerMenuOpen} onClose={closePopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
