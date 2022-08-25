import { root, tokenKey } from "./config.js";
import DOMHandler from "./dom-handler.js";
import CreateAccountPage from "./pages/create-account-page.js";
import HomePage from "./pages/home.js";
import LoginPage from "./pages/login-page.js";
import STORE from "./store.js";

function App() {
  let token = sessionStorage.getItem(tokenKey);
  const page = STORE.currentPage();
  if(!token){
    switch(page){
      case STORE.pages.login(): DOMHandler.load(LoginPage(), root); break;
      case STORE.pages.create_account(): DOMHandler.load(CreateAccountPage(),root); break;
    }
  }
  else DOMHandler.load(HomePage(),root)
}

export default App;
