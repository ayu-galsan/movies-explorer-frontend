import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import "../LoginForm/LoginForm.css";

function Register() {
  return (
    <LoginForm
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      questionText="Уже зарегистрированы?"
      linkRoute="/signin"
      linkText="Войти"
    >
      <label className="login-form__label">Введите имя</label>
      <input
        className="login-form__input"
        type="text"
        name="name"
        placeholder="Имя"
        required
        minLength="2"
      ></input>
      <label className="login-form__label">Введите e-mail</label>
      <input
        className="login-form__input"
        type="email"
        name="email"
        placeholder="E-mail"
        required
        minLength="6"
      ></input>
      <label className="login-form__label">Введите пароль</label>
      <input
        className="login-form__input"
        placeholder="Пароль"
        type="password"
        name="password"
        required
        minLength="6"
        maxLength="20"
      ></input>
    </LoginForm>
  );
}

export default Register;
