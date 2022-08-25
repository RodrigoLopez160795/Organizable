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
    
  // if (!response.ok) throw new Error(user.errors.message);
}

export { login };
