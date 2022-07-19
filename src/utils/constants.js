export const BASE_URL = "http://localhost:3001";
export const MOVIES_URL = "https://api.nomoreparties.co";
export const NAME_VALUE_ERROR_MESSAGE = "Неверный формат ввода имени";
export const EMAIL_VALUE_ERROR_MESSAGE = "Неверный формат ввода email";
export const messageErrorTextSignUp = "Произошла ошибка при регистрации";
export const messageErrorTextSignIn = "Произошла ошибка при авторизации";
export const messageErrorSearchForm = "Нужно ввести ключевое слово";
export const messageErrorTextServer =
  "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен. Подождите немного и попробуйте ещё раз.";
export const messageTextUpdateUser = "Данные успешно сохранены";
export const messageNotFindMovies = "Ничего не найдено";
export const DESKTOP_SIZE = 1280;
export const TABLET_SIZE = 768;
export const MOBILE_SIZE = 480;
export const SHORT_MOVIES = 40;

export function checkResponse(res) {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
}
