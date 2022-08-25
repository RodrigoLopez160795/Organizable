import { Input } from "../components/input.js";
import { Logo } from "../components/logo.js";
import LoginPage from "./login-page.js";
import DOMHandler from "../dom-handler.js";
const errors = [];
function render() {
  return `
      <section class="section">
        <div class="container login-page">
          ${Logo()}
          <p class="text-center font-xl title">Create Account</p>
          <form class="form" id="login-form">
            ${Input({
              label: "username",
              placeholder: "RoLo",
              icon: "/assets/images/user.svg",
              name: "username",
              type: "text",
              alt: "Username logo",
            })}
            ${Input({
              label: "password",
              placeholder: "******",
              icon: "/assets/images/key.svg",
              name: "password",
              type: "password",
              alt: "Password logo",
            })}
            <button type="submit" class="button font-s upcase">Login</button>
            <p class="text-center anchor-red font-reg" id="js-login">Login</p>
          </form>
        </div>
      </section>
      `;
}

function listenLogin() {
  const account = document.querySelector("#js-login");
  account.addEventListener("click", () => {
    DOMHandler.load(LoginPage(), root);
  });
}

function CreateAccountPage() {
  return {
    toString() {
      return render();
    },
    addListeners() {
      listenLogin();
    },
  };
}

export default CreateAccountPage;
