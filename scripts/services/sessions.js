import { BASE_URI, tokenKey } from "../config.js";

async function login(credentials = { username, password }) {
    const response = await fetch(`${BASE_URI}/login`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(credentials),
    });
    const user = await response.json();
    if(!response.ok){
        return user.errors.message;
    }
    sessionStorage.setItem(tokenKey, user.token);
    return user;
}

async function signin(credentials = {username,email,first_name,last_name,password}){
  const response = await fetch(`${BASE_URI}/users`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(credentials),
  });
  const user = await response.json();
  if(!response.ok){
      return user.errors.message;
  }
  sessionStorage.setItem(tokenKey, user.token);
  return user;
}



export { login, signin };
