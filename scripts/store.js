const STORE = {
  pages: {
    login: () => `login_page`,
    home: () => `home_page`,
    create_account: () => `create_account`,
    my_boards: () => `my_boards`,
    my_profile: () => `my_profile`,
    closed_boards: () => `closed_boards`,
  },
  currentPage() {
    return localStorage.getItem("current_page") || this.pages.login();
  },
};

export default STORE;
