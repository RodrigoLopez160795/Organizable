import DOMHandler from "./dom-handler";
import LoginPage from "./pages/login-page";
root = document.querySelector("#root");
function App() {
  DOMHandler.load(LoginPage, root);
}

export default App;
