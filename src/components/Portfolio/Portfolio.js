import IconArrow from "../../images/icon-arrow.svg";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h3 className="portfolio__header">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__list-item">
          <a
            className="portfolio__link"
            href="https://ayu-galsan.github.io/how-to-learn/"
            title="https://ayu-galsan.github.io/how-to-learn/"
            rel="noreferrer"
            target="_blank"
          >
            Статичный сайт
          </a>
          <a
            className="portfolio__link"
            href="https://ayu-galsan.github.io/how-to-learn/"
            title="https://ayu-galsan.github.io/how-to-learn/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className="portfolio__link-icon"
              src={IconArrow}
              alt="Иконка со стрелкой"
            />
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            className="portfolio__link"
            href="https://ayu-galsan.github.io/russian-travel/"
            title="https://ayu-galsan.github.io/russian-travel/"
            rel="noreferrer"
            target="_blank"
          >
            Адаптивный сайт
          </a>
          <a
            className="portfolio__link"
            href="https://ayu-galsan.github.io/russian-travel/"
            title="https://ayu-galsan.github.io/russian-travel/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className="portfolio__link-icon"
              src={IconArrow}
              alt="Иконка со стрелкой"
            />
          </a>
        </li>
        <li className="portfolio__list-item">
          <a
            className="portfolio__link"
            href="https://domenname.students.nomoreparties.sbs/"
            title="https://domenname.students.nomoreparties.sbs/"
            rel="noreferrer"
            target="_blank"
          >
            Одностраничное приложение
          </a>
          <a
            className="portfolio__link"
            href="https://domenname.students.nomoreparties.sbs/"
            title="https://domenname.students.nomoreparties.sbs/"
            rel="noreferrer"
            target="_blank"
          >
            <img
              className="portfolio__link-icon"
              src={IconArrow}
              alt="Иконка со стрелкой"
            />
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
