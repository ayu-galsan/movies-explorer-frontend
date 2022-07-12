import Title from "../Title/Title";
import AboutMePhoto from "../../images/about__me-photo.png";
import Portfolio from "../Portfolio/Portfolio";
import "./AboutMe.css";

function AboutMe() {
  const ABOUT_ME_TITLE = "Студент";
  return (
    <section className="about-me" id="about-me">
      <Title text={ABOUT_ME_TITLE} />
      <div className="about-me__container">
        <div className="about-me__info">
          <h2 className="about-me__name">Светлана</h2>
          <h3 className="about-me__job">Фронтенд-разработчик, 34 года</h3>
          <p className="about-me__text">
            Я родилась и выросла в Хабаровске, после окончания института
            переехала в Москву. Имею высшее финансовое образование и
            дополнительное образование по оценке бизнеса, работала бухгалтером.
            С уходом в декрет открыла для себя "таинственный мир IT" и не могу
            остановиться. Решила пройти курсы Яндекс.Практикума по
            Вэб-разработке, выполнила ряд проектных работ с прохождением ревью,
            освоила HTML, CSS, JavaScript.
          </p>
          <a
            className="about-me__link"
            href="https://github.com/ayu-galsan"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <img
          className="about-me__photo"
          src={AboutMePhoto}
          alt="моя фотография"
        />
      </div>
      <Portfolio />
    </section>
  );
}

export default AboutMe;
