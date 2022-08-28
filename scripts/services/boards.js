import { BASE_URI, root, tokenKey } from "../config.js";
import DOMHandler from "../dom-handler.js";
import HomePage from "../pages/home.js";

export async function getBoards() {
  const token = sessionStorage.getItem(tokenKey);
  const response = await fetch(`${BASE_URI}/boards`, {
    headers: {
      Authorization: `Token token=${token}`,
    },
    method: "GET",
  });
  const boards = await response.json();
  if (!response.ok) {
    return boards.errors.message;
  }
  return boards;
}

export async function createBoards(data = { name, color }) {
  const token = sessionStorage.getItem(tokenKey);
  const response = await fetch(`${BASE_URI}/boards`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token token=${token}`,
    },
    method: "POST",
    body: JSON.stringify(data),
  });
  const board = await response.json();
  if (!response.ok) {
    return board.errors.message;
  }
  return board;
}

export async function boardStarred(id, credentials = { starred }) {
  const token = sessionStorage.getItem(tokenKey);
  const response = await fetch(`${BASE_URI}/boards/${id}`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token token=${token}`,
    },
    method: "PATCH",
    body: JSON.stringify(credentials),
  });
  const board = await response.json();
  if (!response.ok) {
    return board.errors.message;
  }
  DOMHandler.load(HomePage(), root);
  return board;
}
