import closeButton from "../../images/movies-close-button.png";
import "./MoviesDeleteButton.css";

function MoviesDeleteButton() {
  return (
    <button className="movies-save-button">
      <img
        src={closeButton}
        alt="Закрыть"
        className="movies-save-button__image"
      />
    </button>
  );
}

export default MoviesDeleteButton;
