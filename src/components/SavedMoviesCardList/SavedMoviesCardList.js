import MoviesCard from "../MoviesCard/MoviesCard";
import "./SavedMoviesCardList.css";

function SavedMoviesCardList() {
  return (
    <div className="movies-card-list">
      <ul className="movies-card-list__item">
        {[...Array(3)].map((movie, index) => {
          return <MoviesCard key={index} />;
        })}
      </ul>
    </div>
  );
}

export default SavedMoviesCardList;
