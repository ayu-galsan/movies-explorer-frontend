import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <h3 className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </h3>
      <div className="footer__container">
        <span className="footer__copyright">© 2022</span>
        <ul className="footer__list">
          <li className="footer__list-item">
            <a
              className="footer__link"
              href="https://practicum.yandex.ru/"
              rel="noreferrer"
              target="_blank"
              title="https://practicum.yandex.ru/"
            >
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__list-item">
            <a
              className="footer__link"
              href="https://github.com/ayu-galsan"
              rel="noreferrer"
              target="_blank"
              title="https://github.com/ayu-galsan"
            >
              Github
            </a>
          </li>
          <li className="footer__list-item">
            <a
              className="footer__link"
              href="https://ru-ru.facebook.com/"
              rel="noreferrer"
              target="_blank"
              title="https://practicum.yandex.ru/"
            >
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
