import { root, tokenKey } from "./config.js";
import DOMHandler from "./dom-handler.js";
import HomePage from "./pages/home.js";
import LoginPage from "./pages/login-page.js";
function App() {
  let token = sessionStorage.getItem(tokenKey);
  if(!token) DOMHandler.load(LoginPage(), root);
  else DOMHandler.load(HomePage(),root)
}

export default App;
