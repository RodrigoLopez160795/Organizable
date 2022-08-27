import { userKey } from "./config.js";

const STORE = {
  pages: {
    login: () => `login_page`,
    home: () => `home_page`,
    create_account: () => `create_account`,
    my_boards: () => `my_boards`,
    my_profile: () => `my_profile`,
    closed_boards: () => `closed_boards`,
  },
  currentPage() {
    return localStorage.getItem("current_page") || this.pages.login();
  },
  setUserInLocalStorage(user = { id, username, email, firstname, lastname }) {
    localStorage.setItem(userKey, JSON.stringify(user));
  },
  getUserValues() {
    const user = localStorage.getItem(userKey);
    return JSON.parse(user);
  },
};

export default STORE;
