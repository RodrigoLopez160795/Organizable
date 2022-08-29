import { root, tokenKey } from "./config.js";
import DOMHandler from "./dom-handler.js";
import BoardPage from "./pages/board-page.js";
import CreateAccountPage from "./pages/create-account-page.js";
import HomePage from "./pages/home.js";
import LoginPage from "./pages/login-page.js";
import STORE from "./store.js";
//ToDo check initial page
function App() {
  let token = sessionStorage.getItem(tokenKey);
  const page = STORE.currentPage();
  if(!token){
    switch(page){
      case STORE.pages.login(): DOMHandler.load(LoginPage(), root); break;
      case STORE.pages.create_account(): DOMHandler.load(CreateAccountPage(),root); break;
    }
  }
  else {
    switch(page){
      case STORE.pages.my_boards(): DOMHandler.load(HomePage(),root); break;
      case STORE.pages.board(): DOMHandler.load(BoardPage(), root); break;
    }
  }
}

export default App;
