import { Logo } from "../components/logo.js";

function render(){
    return `${Logo()}`
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
