import { Logo } from "../components/logo.js";

function render(){
    return `
    <section class="section">
      <div class="container">
        ${Logo()}
        <p class="text-center font-xl title">Login</p>
      </div>
    </section>
    `
}

function LoginPage() {
  return {
    toString() {
      return render();
    },
    addListeners() {},
  };
}

export default LoginPage
