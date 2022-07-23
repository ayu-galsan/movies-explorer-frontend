import React from "react";
import { Link } from "react-router-dom";
import {
  messageErrorTextSignIn,
  messageErrorTextSignUp,
} from "../../utils/constants";
import Logo from "../Logo/Logo";
import Preloader from "../Preloader/Preloader";
import "./LoginForm.css";

function LoginForm({
  title,
  children,
  isValid,
  buttonText,
  questionText,
  linkRoute,
  linkText,
  handleSubmit,
  messageErrorLogin,
  messageErrorRegister,
  renderLoading,
}) {
  return (
    <form className="login-form" onSubmit={handleSubmit} noValidate>
      <div className="login-form__text-container">
        <Logo />
        <h2 className="login-form__title">{title}</h2>
        <div className="login-form__inputs">{children}</div>
      </div>
      <div className="login-form__buttons">
        {messageErrorLogin && (
          <span className="login-form__error">{messageErrorTextSignIn}</span>
        )}
        {messageErrorRegister && (
          <span className="login-form__error">{messageErrorTextSignUp}</span>
        )}
        {renderLoading ? (
          <Preloader />
        ) : (
          <button
            className={`login-form__submit-button ${
              !isValid && "login-form__submit-button_disabled"
            } }`}
            type="submit"
            disabled={!isValid && true}
          >
            {buttonText}
          </button>
        )}
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
