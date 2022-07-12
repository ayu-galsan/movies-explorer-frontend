import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import "./LoginForm.css";

function LoginForm({
  title,
  children,
  buttonText,
  questionText,
  linkRoute,
  linkText,
}) {
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form className="login-form" onSubmit={handleSubmit}>
      <div className="login-form__text-container">
        <Logo />
        <h2 className="login-form__title">{title}</h2>
        <div className="login-form__inputs">{children}</div>
      </div>
      <div className="login-form__buttons">
        <button className="login-form__submit-button" type="submit">
          {buttonText}
        </button>
        <p className="login-form__text">
          {questionText}
          <Link to={linkRoute} className="login-form__link">
            {linkText}
          </Link>
        </p>
      </div>
    </form>
  );
}

export default LoginForm;
