function render(){
    return `<p class="logo">{ organizable }</p>`
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
