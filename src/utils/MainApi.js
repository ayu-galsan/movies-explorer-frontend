import { BASE_URL, MOVIES_URL, checkResponse } from "./constants";
import { getToken } from "./token";

export function getUserData() {
  return fetch(`${BASE_URL}/users/me`, {
    headers: {
      authorization: `Bearer ${localStorage.getItem("jwt")}`,
    },
  }).then(checkResponse);
}

export function register(name, email, password) {
  return fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name,
      email,
      password,
    }),
  }).then(checkResponse);
}

export function authorize(email, password) {
  return fetch(`${BASE_URL}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  }).then(checkResponse);
}

export function checkToken(token) {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

export function getContent(token) {
  return fetch(`${BASE_URL}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then(checkResponse);
}

export function editProfile(data) {
  return fetch(`${BASE_URL}/users/me`, {
    method: "PATCH",
    headers: {
      authorization: `Bearer ${getToken()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: data.name,
      email: data.email,
    }),
  }).then(checkResponse);
}

export function getSavedMovies(token) {
  return fetch(`${BASE_URL}/movies`, {
    headers: {
      authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
}

export function saveMovie(data) {
  return fetch(`${BASE_URL}/movies`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      authorization: `Bearer ${getToken()}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      country: data.country || "unknown",
      director: data.director || "unknown",
      duration: data.duration || "unknown",
      year: data.year || "unknown",
      description: data.description || "unknown",
      image: `${MOVIES_URL}${data.image.url}` || "unknown",
      trailerLink: data.trailerLink || "unknown",
      nameRU: data.nameRU || "unknown",
      nameEN: data.nameEN || "unknown",
      thumbnail:
        `${MOVIES_URL}${data.image.formats.thumbnail.url}` || "unknown",
      movieId: data.id,
    }),
  }).then(checkResponse);
}

export function deleteMovie(id) {
  return fetch(`${BASE_URL}/movies/${id}`, {
    method: "DELETE",
    headers: {
      authorization: `Bearer ${getToken()}`,
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
}
