import Title from "../Title/Title";
import "./AboutProject.css";

function AboutProject() {
  const ABOUT_PROJECT_TITLE = "О проекте";
  return (
    <section className="project" id="project">
      <Title text={ABOUT_PROJECT_TITLE} />
      <ul className="project__info">
        <li className="project__info-item">
          <h3 className="project__info-heading">
            Дипломный проект включал 5 этапов
          </h3>
          <p className="project__info-text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и финальные доработки.
          </p>
        </li>
        <li className="project__info-item">
          <h3 className="project__info-heading">
            На выполнение диплома ушло 5 недель
          </h3>
          <p className="project__info-text">
            У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было
            соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>
      <div className="project__deadline">
        <li className="project__deadline-item">
          <h3 className="project__deadline-title project__deadline-title_type_short">
            1 неделя
          </h3>
          <p className="project__deadline-text">Back-end</p>
        </li>
        <li className="project__deadline-item">
          <h3 className="project__deadline-title project__deadline-title_type_long">
            4 недели
          </h3>
          <p className="project__deadline-text">Front-end</p>
        </li>
      </div>
    </section>
  );
}

export default AboutProject;
