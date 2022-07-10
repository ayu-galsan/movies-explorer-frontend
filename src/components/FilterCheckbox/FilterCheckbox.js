import React from "react";
import activeCheckbox from "../../images/checkbox-active-icon.png";
import inaAtiveCheckbox from "../../images/checkbox-inactive-icon.png";
import "./FilterCheckbox.css";

function FilterCheckbox() {
  const [isActiveSwitch, setIsActiveSwitch] = React.useState(true);

  function handleActiveSwitch() {
    setIsActiveSwitch(!isActiveSwitch);
  }
  
  return (
    <div className="filter-checkbox">
      <button className="filter-checkbox__button" onClick={handleActiveSwitch}>
        {isActiveSwitch ? (
          <img
            src={activeCheckbox}
            className="filter-checkbox__image"
            alt="Чекбокс включен"
          />
        ) : (
          <img
            src={inaAtiveCheckbox}
            className="filter-checkbox__image"
            alt="Чекбокс выключен"
          />
        )}
      </button>
      <p className="filter-checkbox__text">Короткометражки</p>
    </div>
  );
}
export default FilterCheckbox;
