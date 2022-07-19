import React from "react";
import "./Profile.css";
import { useFormWithValidation } from "../../utils/utils";
import { messageTextUpdateUser } from "../../utils/constants";

function Profile({ signOut, currentUser, onUpdateUser, isEditSuccess }) {
  const { values, setValues, handleChange, errors, isValid, setIsValid } =
    useFormWithValidation();

  React.useEffect(() => {
    setValues(currentUser);
    setIsValid(true);
  }, [currentUser, setValues, setIsValid]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateUser(values);
  }

  return (
    <form className="profile" onSubmit={handleSubmit} noValidate>
      <h2 className="profile__title">Привет, {currentUser.name}!</h2>
      <ul className="profile__container">
        <li className="profile__container-item">
          <label className="profile__text">Имя</label>
          <input
            className={`profile__input ${
              errors.name && "profile__input_type_error"
            }`}
            value={values.name || ""}
            onChange={handleChange}
            name="name"
            type="text"
            placeholder="Введите имя"
            minLength="2"
            maxLength="30"
          />
        </li>
        <span className="profile__error">{errors.name || ""}</span>
        <li className="profile__container-item">
          <label className="profile__text">E-mail</label>
          <input
            className={`profile__input ${
              errors.email && "profile__input_type_error"
            }`}
            value={values.email || ""}
            onChange={handleChange}
            name="email"
            type="email"
            placeholder="Введите e-mail"
          />
        </li>
        <span className="profile__error">{errors.email || ""}</span>
      </ul>
      <div className="profile__buttons">
        {isEditSuccess && (
          <span className="profile__message">{messageTextUpdateUser}</span>
        )}
        <button
          className={
            !isValid ||
            (values.name === currentUser.name &&
              values.email === currentUser.email)
              ? "profile__button profile__button_edit_disabled"
              : "profile__button profile__button_edit"
          }
          type="submit"
          disabled={
            !isValid ||
            (values.name === currentUser.name &&
              values.email === currentUser.email)
          }
        >
          Редактировать
        </button>
        <button
          className="profile__button profile__button_exit"
          onClick={signOut}
          type="button"
        >
          Выйти из аккаунта
        </button>
      </div>
    </form>
  );
}
export default Profile;
