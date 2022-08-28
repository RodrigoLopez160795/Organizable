import { Input } from "../components/input.js";
import { Logo } from "../components/logo.js";
import LoginPage from "./login-page.js";
import DOMHandler from "../dom-handler.js";
import HomePage from "./home.js";
import { signin } from "../services/sessions.js";
import STORE from "../store.js";
let errors = []
function renderErrors(error) {
  return `<p class="error">${error}</p>`;
}

function render() {
  return `
      <section class="p-48 app h-100">
        <div class="container login-page">
          ${Logo()}
          <p class="text-center font-xl title">Create Account</p>
          <form class="form" id="js-create-account-form">
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
              label: "email",
              placeholder: "rod@mail.com",
              icon: "/assets/images/mail.svg",
              name: "email",
              type: "email",
              alt: "Email logo",
            })}
            ${Input({
              label: "first name",
              placeholder: "Rodrigo",
              icon: "/assets/images/folder.svg",
              name: "firstname",
              type: "text",
              alt: "Folder logo",
            })}
            ${Input({
              label: "last name",
              placeholder: "López Alvarado",
              icon: "/assets/images/folder.svg",
              name: "lastname",
              type: "text",
              alt: "Folder logo",
            })}
            ${Input({
              label: "password",
              placeholder: "******",
              icon: "/assets/images/key.svg",
              name: "password",
              type: "password",
              alt: "Password logo",
            })}
            <button type="submit" class="button-black font-s upcase">create account</button>
            <p class="text-center anchor-red font-reg" id="js-login">Login</p>
          </form>
        </div>
      </section>
      `;
}

function listenErrors(...values) {
  const [username, email, firstname, lastname, password] = values;
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
  if (password === "") {
    errors.push("Need to specify a password");
  }
}

function listenSubmit() {
  errors = [];
  const form = document.querySelector("#js-create-account-form");
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const { username, email, firstname, lastname, password } =
      e.target.elements;
    listenErrors(
      username.value,
      email.value,
      firstname.value,
      lastname.value,
      password.value
    );
    if (errors.length > 0) {
      DOMHandler.reload();
    } else {
      const user = await signin({
        username: username.value,
        email: email.value,
        first_name: firstname.value,
        last_name: lastname.value,
        password: password.value,
      });
      if (!user.token) {
        errors.push(user);
        DOMHandler.reload()
      } else {
        STORE.setUserInLocalStorage({
          id: user.id,
          username: user.username,
          email: user.email,
          firstname: user.firstName,
          lastname: user.lastName,
        });
        localStorage.setItem("current_page", STORE.pages.my_boards())
        DOMHandler.load(HomePage(), root);
      }
    }
  });
}

function listenLogin() {
  const account = document.querySelector("#js-login");
  account.addEventListener("click", () => {
    localStorage.setItem("current_page", STORE.pages.login())
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
      listenSubmit();
    },
  };
}

export default CreateAccountPage;
