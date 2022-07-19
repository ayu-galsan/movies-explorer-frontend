import { checkResponse, MOVIES_URL } from "./constants";

export function getMovies() {
  return fetch(`${MOVIES_URL}/beatfilm-movies`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
}
