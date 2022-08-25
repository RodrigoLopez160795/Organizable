import { Input } from "../components/input.js";
import { Logo } from "../components/logo.js";

function render() {
  return `
    <section class="section">
      <div class="container login-page">
        ${Logo()}
        <p class="text-center font-xl title">Login</p>
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
          <p class="text-center anchor-red font-reg">Create Account</p>
        </form>
      </div>
    </section>
    `;
}

function listenSubmit() {
  const form = document.querySelector("#login-form");
  form.addEventListener((e) => {
    e.preventDefault();
    console.log(e);
  });
}

function LoginPage() {
  return {
    toString() {
      return render();
    },
    addListeners() {
      listenSubmit();
    },
  };
}

export default LoginPage;
