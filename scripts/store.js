import CreateAccountPage from "./pages/create-account-page";
import HomePage from "./pages/home";
import LoginPage from "./pages/login-page";

const STORE = {
  currentPage: localStorage.getItem("current_page") || "login",
  pages: {
    login: LoginPage(),
    home: HomePage(),
    create_account: CreateAccountPage(),
  },
};

export default STORE;
