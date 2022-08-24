function render(){
    return `<h1>Login</h1>`
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
