import React from "react";
import LoginForm from "../LoginForm/LoginForm";
import "../LoginForm/LoginForm.css";
import { useFormWithValidation } from "../../utils/utils";

function Register({ onRegister, messageError, renderLoading }) {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  React.useEffect(() => {
    resetForm();
  }, [resetForm]);

  function handleSubmit(e) {
    e.preventDefault();
    onRegister(values.name, values.email, values.password);
  }

  return (
    <LoginForm
      title="Добро пожаловать!"
      buttonText="Зарегистрироваться"
      questionText="Уже зарегистрированы?"
      linkRoute="/signin"
      linkText="Войти"
      handleSubmit={handleSubmit}
      isValid={isValid}
      messageErrorRegister={messageError}
      renderLoading={renderLoading}
    >
      <label className="login-form__label">Введите имя</label>
      <input
        className={`login-form__input ${
          errors.name && "login-form__input_type_error"
        }`}
        type="text"
        name="name"
        id="name-input"
        value={values.name || ""}
        placeholder="Имя"
        required
        minLength="2"
        onChange={handleChange}
      />
      <span className="login-form__error" id="name-input-error">
        {errors.name || ""}
      </span>
      <label className="login-form__label">Введите e-mail</label>
      <input
        className={`login-form__input ${
          errors.email && "login-form__input_type_error"
        }`}
        type="email"
        name="email"
        id="email-input"
        value={values.email || ""}
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
        placeholder="Пароль"
        type="password"
        name="password"
        id="password-input"
        value={values.password || ""}
        required
        minLength="6"
        maxLength="20"
        onChange={handleChange}
      />
      <span className="login-form__error" id="password-input-error">
        {errors.password || ""}
      </span>
    </LoginForm>
  );
}

export default Register;
