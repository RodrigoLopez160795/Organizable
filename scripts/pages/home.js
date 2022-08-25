import { Aside } from "../components/aside.js";
import { root } from "../config.js";
import DOMHandler from "../dom-handler.js";
import { logout } from "../services/sessions.js";
import LoginPage from "./login-page.js";

function render(){
  return `
  <main class="main flex js-home-page">
  ${Aside()}
  <h1>Cards</h1>
  </main>
  `
}

function listenLogout(){
  const signout = document.querySelector(".js-logout");
  signout.addEventListener("click",()=>{
    logout().then(DOMHandler.load(LoginPage(),root));
  })
}

function HomePage() {
  return {
    toString() {
      return render();
    },
    addListeners() {
      listenLogout()
    },
  };
}

export default HomePage;
