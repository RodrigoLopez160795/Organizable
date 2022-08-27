import { BASE_URI, tokenKey } from "../config.js";

export async function getBoards(){
    const token = sessionStorage.getItem(tokenKey);
    const response = await fetch(`${BASE_URI}/boards`,{
        headers:{
            Authorization: `Token token=${token}`,
        },
        method: "GET"
    })
    const boards = await response.json();
  if (!response.ok) {
    return boards.errors.message;
  }
  return boards;
}