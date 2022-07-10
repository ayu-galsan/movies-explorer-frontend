import MoviesCard from "../MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList() {
  return (
    <div className="movies-card-list">
      <ul className="movies-card-list__item">
        {[...Array(12)].map((movie, index) => {
          return <MoviesCard key={index} />;
        })}
      </ul>
      <button className="movies-card-list__more">Ещё</button>
    </div>
  );
}

export default MoviesCardList;
