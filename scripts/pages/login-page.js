import { Input } from "../components/input.js";
import { Logo } from "../components/logo.js";
import { root } from "../config.js";
import DOMHandler from "../dom-handler.js";
import { login } from "../services/sessions.js";
import CreateAccountPage from "./create-account-page.js";
import HomePage from "./home.js";

let errors = [];
function renderErrors(error) {
  return `<p class="error">${error}</p>`;
}

function render() {
  return `
    <section class="mt-96">
      <div class="container login-page">
        ${Logo()}
        <p class="text-center font-xl title">Login</p>
        <form class="form" id="js-login-form">
        ${errors.map(renderErrors).join("")}
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
          <p class="text-center anchor-red font-reg" id="js-create-account">Create Account</p>
        </form>
      </div>
    </section>
    `;
}
function listenErrors(...values) {
  const [username, password] = values;
  if (username === "") {
    errors.push("Need to specify a username");
  }
  if (password === "") {
    errors.push("Need to specify a password");
  }
}
function listenSubmit() {
  errors = [];
  const form = document.querySelector("#js-login-form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { username, password } = e.target.elements;
    listenErrors(username.value, password.value);
    if (errors.length > 0) {
      DOMHandler.reload();
    } else {
      const user = await login({
        username: username.value,
        password: password.value,
      });
      if (!user.token) {
        errors.push(user);
        DOMHandler.reload()
      } else {
        DOMHandler.load(HomePage(), root);
      }
    }
  });
}

function listenCreate() {
  const account = document.querySelector("#js-create-account");
  account.addEventListener("click", () => {
    DOMHandler.load(CreateAccountPage(), root);
  });
}

function LoginPage() {
  return {
    toString() {
      return render();
    },
    addListeners() {
      listenSubmit();
      listenCreate();
    },
  };
}

export default LoginPage;
