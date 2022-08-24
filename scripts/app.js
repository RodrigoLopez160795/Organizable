import DOMHandler from "./dom-handler.js";
import LoginPage from "./pages/login-page.js";
const root = document.querySelector("#root");
function App() {
  DOMHandler.load(LoginPage(), root);
}

export default App;
