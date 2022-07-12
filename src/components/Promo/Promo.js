import NavTab from "../NavTab/NavTab";
import "./Promo.css";

function Promo() {
  const PROMO_TEXT = "Учебный проект студента факультета Веб-разработки.";
  return (
    <section className="promo">
      <h1 className="promo__title">{PROMO_TEXT}</h1>
      <NavTab />
    </section>
  );
}

export default Promo;
