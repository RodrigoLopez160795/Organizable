import { Aside } from "../components/aside.js";
import { ClosedBoards } from "../components/closed-boards.js";
import { MyBoards } from "../components/my-boards.js";
import { MyProfile } from "../components/my-profile.js";
import { root, userKey } from "../config.js";
import DOMHandler from "../dom-handler.js";
import { deleteUser, logout, update } from "../services/sessions.js";
import STORE from "../store.js";
import LoginPage from "./login-page.js";

let errors = [];


function renderAsidePages() {
  switch (STORE.currentPage()) {
    case STORE.pages.my_boards():
      return MyBoards();
    case STORE.pages.my_profile():
      return MyProfile(errors);
    case STORE.pages.closed_boards():
      return ClosedBoards();
  }
}
function render() {
  return `
  <main class="flex js-home-page">
  ${Aside()}
  ${renderAsidePages()}
  </main>
  `;
}

function listenErrors(...values) {
  const [username, email, firstname, lastname] = values;
  if (username === "") {
    errors.push("Need to specify a username");
  }
  if (email === "") {
    errors.push("Need to specify email");
  }
  if (firstname === "") {
    errors.push("Need to specify firstname");
  }
  if (lastname === "") {
    errors.push("Need to specify lastname");
  }
}

function listenLogout() {
  const signout = document.querySelector(".js-logout");
  signout.addEventListener("click", () => {
    localStorage.setItem("current_page", STORE.pages.login());
    localStorage.removeItem(userKey);
    logout().then(DOMHandler.load(LoginPage(), root));
  });
}

function listenMyBoards() {
  const myBoards = document.querySelector(".js-my-boards");
  myBoards.addEventListener("click", () => {
    localStorage.setItem("current_page", STORE.pages.my_boards());
    DOMHandler.reload();
  });
}

function listenMyProfile() {
  const myBoards = document.querySelector(".js-my-profile");
  myBoards.addEventListener("click", () => {
    localStorage.setItem("current_page", STORE.pages.my_profile());
    DOMHandler.reload();
  });
}

function listenClosedBoards() {
  const myBoards = document.querySelector(".js-closed-boards");
  myBoards.addEventListener("click", () => {
    localStorage.setItem("current_page", STORE.pages.closed_boards());
    DOMHandler.reload();
  });
}

function listenUpdateUser() {
  const user = document.querySelector("#js-update-user");
  user.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { username, email, firstname, lastname } =
      e.target.elements;
    listenErrors(
      username.value,
      email.value,
      firstname.value,
      lastname.value,
    );
    if (errors.length > 0) {
      DOMHandler.reload();
    }else{
      const getUser = STORE.getUserValues()

      const updatedUser = await update(getUser.id,{
        username: username.value,
        email: email.value,
        first_name: firstname.value,
        last_name: lastname.value,
      });
      STORE.setUserInLocalStorage({
        id: updatedUser.id,
        username: updatedUser.username,
        email: updatedUser.email,
        firstname: updatedUser.firstName,
        lastname: updatedUser.lastName,
      });
      localStorage.setItem("current_page", STORE.pages.my_boards())
      DOMHandler.load(HomePage(),root)
    }
  });
}

function listenDeleteUser(){
  const user = document.querySelector("#js-delete-user");
  user.addEventListener("click",()=>{
    const getUser = STORE.getUserValues()
    localStorage.setItem("current_page", STORE.pages.login());
    localStorage.removeItem(userKey);
    deleteUser(getUser.id).then(DOMHandler.load(HomePage(),root))
    })
}

function HomePage() {
  return {
    toString() {
      return render();
    },
    addListeners() {
      listenLogout();
      listenMyBoards();
      listenClosedBoards();
      listenMyProfile();
      if(localStorage.getItem("current_page") === STORE.pages.my_profile()){
        listenUpdateUser();
        listenDeleteUser();
        listenErrors();
      }
    },
  };
}

export default HomePage;
