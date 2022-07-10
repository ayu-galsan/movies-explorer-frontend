import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import "../LoginForm/LoginForm.css";

function Login() {
  return (
    <LoginForm
      title="Рады видеть!"
      buttonText="Войти"
      questionText="Ещё не зарегистрированы?"
      linkRoute="/signup"
      linkText="Регистрация"
    >
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
        type="password"
        name="password"
        placeholder="Пароль"
        required
        minLength="6"
        maxLength="20"
      ></input>
    </LoginForm>
  );
}

export default Login;
