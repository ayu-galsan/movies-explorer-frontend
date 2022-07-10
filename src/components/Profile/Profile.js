import React from "react";
import "./Profile.css";

function Profile({ signOut }) {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="profile" onSubmit={handleSubmit}>
      <h2 className="profile__title">Привет, Виталий!</h2>
      <ul className="profile__container">
        <li className="profile__container-item">
          <label className="profile__text">Имя</label>
          <input
            className="profile__input"
            value={name || ""}
            onChange={handleChangeName}
            name="name"
            type="text"
            placeholder="Введите имя"
            minLength="2"
            maxLength="30"
          />
        </li>
        <li className="profile__container-item">
          <label className="profile__text">E-mail</label>
          <input
            className="profile__input"
            value={email || ""}
            onChange={handleChangeEmail}
            name="email"
            type="email"
            placeholder="Введите e-mail"
          />
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
