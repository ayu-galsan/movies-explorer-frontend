import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./FilterCheckbox.css";

function FilterCheckbox({ handleCheckbox }) {
  const location = useLocation();
  const [isChecked, setIsChecked] = useState(false);

  function handleChange(e) {
    let checkboxState = e.target.checked;
    setIsChecked(checkboxState);
    if (location.pathname === "/movies") {
      localStorage.setItem("checkbox", checkboxState);
    }
    handleCheckbox(checkboxState);
  }

  React.useEffect(() => {
    if (location.pathname === "/movies" && localStorage.getItem("checkbox")) {
      localStorage.getItem("checkbox") === "false"
        ? setIsChecked(false)
        : setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  }, [location.pathname]);

  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__label">
        <input
          className="filter-checkbox__input"
          type="checkbox"
          name="checkbox"
          id="checkbox"
          onChange={handleChange}
          checked={isChecked}
        ></input>
      </label>
      <p className="filter-checkbox__text">Короткометражки</p>
    </div>
  );
}
export default FilterCheckbox;
