import React from "react";
import saveButton from "../../images/movies-save-button.png";
import activeSaveButton from "../../images/movies-active-save-button.png";
import "./MoviesSaveButton.css";

function MoviesSaveButton() {
  const [isSave, setIsSave] = React.useState(true);
  function handleSaveMovies() {
    setIsSave(!isSave);
  }
  return (
    <button className="movies-save-button" onClick={handleSaveMovies}>
      {isSave ? (
        <img
          src={saveButton}
          className="movies-save-button__image"
          alt="Сохранить"
        />
      ) : (
        <img
          src={activeSaveButton}
          className="movies-save-button__image"
          alt="Удалить из сохраненных фильмов"
        />
      )}
    </button>
  );
}
export default MoviesSaveButton;
