import { BASE_URI, root, tokenKey } from "../config.js";
import DOMHandler from "../dom-handler.js";
import BoardPage from "../pages/board-page.js";

export async function createList(id, data = { name }) {
  const token = sessionStorage.getItem(tokenKey);
  const response = await fetch(`${BASE_URI}/boards/${id}/lists`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token token=${token}`,
    },
    method: "POST",
    body: JSON.stringify(data),
  });
  const list = await response.json();
  if (!response.ok) {
    return list.errors.message;
  }
  DOMHandler.load(BoardPage(), root);
  return list;
}

export async function getBoardInfo(id) {
  const token = sessionStorage.getItem(tokenKey);
  const response = await fetch(`${BASE_URI}/boards/${id}`, {
    headers: {
      Authorization: `Token token=${token}`,
    },
    method: "GET",
  });
  const board = await response.json();
  if (!response.ok) {
    return list.errors.message;
  }
  return board;
}

export async function deleteList(board_id,list_id){
  const token = sessionStorage.getItem(tokenKey);
  const response = await fetch(`${BASE_URI}/boards/${board_id}/lists/${list_id}`,{
    headers:{
      "Content-Type": "application/json",
      Authorization: `Token token=${token}`,
    },
    method:"DELETE"
  })
  let data;
  try {
    data = await response.json();
  } catch (error) {
    data = response.status.text;
  }
  if (!response.ok) throw new Error(data.errors);
  DOMHandler.load(BoardPage(), root);
  return data;
}
