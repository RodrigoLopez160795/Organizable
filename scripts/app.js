import { root } from "./config.js";
import DOMHandler from "./dom-handler.js";
import LoginPage from "./pages/login-page.js";
function App() {
  DOMHandler.load(LoginPage(), root);
}

export default App;
