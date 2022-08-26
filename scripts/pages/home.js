import { Aside } from "../components/aside.js";
import { ClosedBoards } from "../components/closed-boards.js";
import { MyBoards } from "../components/my-boards.js";
import { MyProfile } from "../components/my-profile.js";
import { root } from "../config.js";
import DOMHandler from "../dom-handler.js";
import { logout } from "../services/sessions.js";
import STORE from "../store.js";
import LoginPage from "./login-page.js";

function renderAsidePages() {
  switch (STORE.currentPage()) {
    case STORE.pages.my_boards():
      return MyBoards();
    case STORE.pages.my_profile():
      return MyProfile();
    case STORE.pages.closed_boards():
      return ClosedBoards();
  }
}
function render() {
  return `
  <main class="main flex js-home-page">
  ${Aside()}
  ${renderAsidePages()}
  </main>
  `;
}

function listenLogout() {
  const signout = document.querySelector(".js-logout");
  signout.addEventListener("click", () => {
    localStorage.setItem("current_page", STORE.pages.login())
    logout().then(DOMHandler.load(LoginPage(), root));
  });
}

function listenMyBoards(){
  const myBoards = document.querySelector(".js-my-boards");
  myBoards.addEventListener("click",()=>{
    localStorage.setItem("current_page", STORE.pages.my_boards())
    DOMHandler.reload();
  })
}

function lsitenMyProfile(){
  const myBoards = document.querySelector(".js-my-profile");
  myBoards.addEventListener("click",()=>{
    localStorage.setItem("current_page", STORE.pages.my_profile())
    DOMHandler.reload();
  })
}

function listenClosedBoards(){
  const myBoards = document.querySelector(".js-closed-boards");
  myBoards.addEventListener("click",()=>{
    localStorage.setItem("current_page", STORE.pages.closed_boards())
    DOMHandler.reload();
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
      lsitenMyProfile();
    },
  };
}

export default HomePage;
