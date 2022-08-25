const STORE = {
  pages: {
    login: ()=> `Login Page`,
    home: ()=>`home`,
    create_account: ()=>`create_account`,
    },
    currentPage(){
      return localStorage.getItem("current_page") || this.pages.login()
    }
};

export default STORE;
