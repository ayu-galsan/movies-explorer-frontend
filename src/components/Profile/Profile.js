import React from "react";
import "./Profile.css";
import {
  adressErrorText,
  lengthErrorText,
  pattern,
} from "../../utils/constants";

function Profile({ signOut }) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [errorTextName, setErrorTextName] = React.useState("");
  const [linkErrorText, setlinkErrorText] = React.useState("");
  const [isValid, setIsValid] = React.useState(true);

  React.useEffect(() => {
    name.length < 2 || name.length > 30 || !pattern.test(email)
      ? setIsValid(false)
      : setIsValid(true);
  }, [name, email]);

  function showErrorName() {
    if (name.length < 2) {
      setErrorTextName(lengthErrorText);
    } else {
      setErrorTextName("");
    }
  }

  function showErrorEmail() {
    if (!pattern.test(email)) {
      setlinkErrorText(adressErrorText);
    } else {
      setlinkErrorText("");
    }
  }

  function handleChangeName(e) {
    setName(e.target.value);
    showErrorName();
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
    showErrorEmail();
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="profile" noValidate onSubmit={handleSubmit}>
      <h2 className="profile__title">Привет, Виталий!</h2>
      <ul className="profile__container">
        <li className="profile__container-item">
          <label className="profile__text">Имя</label>
          <input
            className={`profile__input ${
              !isValid && "profile__input_type_error"
            }`}
            value={name || ""}
            onChange={handleChangeName}
            name="name"
            type="text"
            id="name-input-error"
            placeholder="Введите имя"
            minLength="2"
            maxLength="30"
          />
          <span
            className={`profile__error ${!isValid && "profile__error_visible"}`}
            id="name-input-error"
            value={name.value}
          >
            {errorTextName}
          </span>
        </li>
        <li className="profile__container-item">
          <label className="profile__text">E-mail</label>
          <input
            className={`profile__input ${
              !isValid && "profile__input_type_error"
            }`}
            value={email || ""}
            onChange={handleChangeEmail}
            name="email"
            type="email"
            placeholder="Введите e-mail"
            id="email-input-error"
          />
          <span
            className={`profile__error ${!isValid && "profile__error_visible"}`}
            id="email-input-error"
            value={name.value}
          >
            {linkErrorText}
          </span>
        </li>
      </ul>
      <div className="profile__buttons">
        <button className="profile__button profile__button_edit" type="submit">
          Редактировать
        </button>
        <button
          className="profile__button profile__button_exit"
          onClick={signOut}
        >
          Выйти из аккаунта
        </button>
      </div>
    </form>
  );
}
export default Profile;
