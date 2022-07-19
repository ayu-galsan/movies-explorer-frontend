import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import "../LoginForm/LoginForm.css";
import { useFormWithValidation } from "../../utils/utils";

function Login({ onLogin, messageError, renderLoading }) {
  const { values, handleChange, errors, isValid, resetForm} =
    useFormWithValidation();

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    onLogin(values.email, values.password);
  }
  return (
    <LoginForm
      title="Рады видеть!"
      buttonText="Войти"
      questionText="Ещё не зарегистрированы?"
      linkRoute="/signup"
      linkText="Регистрация"
      handleSubmit={handleSubmit}
      isValid={isValid}
      messageErrorLogin={messageError}
      renderLoading={renderLoading}
    >
      <label className="login-form__label">Введите e-mail</label>
      <input
        className={`login-form__input ${
          errors.email && "login-form__input_type_error"
        }`}
        type="email"
        name="email"
        id="email-input"
        placeholder="E-mail"
        required
        minLength="6"
        onChange={handleChange}
      />
      <span className="login-form__error" id="email-input-error">
        {errors.email || ""}
      </span>
      <label className="login-form__label">Введите пароль</label>
      <input
        className={`login-form__input ${
          errors.password && "login-form__input_type_error"
        }`}
        type="password"
        name="password"
        id="email-password"
        placeholder="Пароль"
        required
        minLength="6"
        maxLength="20"
        onChange={handleChange}
      />
      <span className="login-form__error" id="email-password-error">
        {errors.password || ""}
      </span>
    </LoginForm>
  );
}

export default Login;
