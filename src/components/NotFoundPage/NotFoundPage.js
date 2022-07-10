import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFoundPage.css";

function NotFoundPage() {
  const navigate = useNavigate();
  function returnBack() {
    navigate(-1);
  }

  return (
    <div className="not-found-page">
      <h1 className="not-found-page__title">404</h1>
      <p className="not-found-page__text">Страница не найдена</p>
      <button className="not-found-page__button" onClick={returnBack}>
        Назад
      </button>
    </div>
  );
}

export default NotFoundPage;
