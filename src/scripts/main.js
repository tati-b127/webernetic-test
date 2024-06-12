document.addEventListener("DOMContentLoaded", () => {
  const bannerBtn = document.querySelector(".banner__btn");
  const modal = document.querySelector(".modal");
  const modalCls = document.querySelector(".modal__cls");
  const inputLogin = document.getElementById("login");
  const inputPassword = document.getElementById("password");
  const btnLogin = document.querySelector(".btn-login");
  const btnReg = document.querySelector(".btn-reg");
  bannerBtn.addEventListener("click", () => {
    modal.classList.add("show");
  });
  modalCls.addEventListener("click", () => {
    clearForm();
    modal.classList.remove("show");
  });

  btnLogin.addEventListener("click", () => {
    clearErr();
    if (!inputLogin.value) {
      inputLogin.classList.add("error");
    }
    if (!inputPassword.value) {
      inputPassword.classList.add("error");
    }
    if (inputLogin.value && inputPassword.value) {
      //check users database fetch
      let users = fetch("https://jsonplaceholder.typicode.com/users", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        method: "POST",
        body: JSON.stringify({
          login: inputLogin.value,
          password: inputPassword.value,
        }),
      })
        .then((response) => {
          response.json();
        })
        .then((json) => {
          return json;
        });
      console.log("Success");
      alert(`Пользователь ${inputLogin.value} вошел в систему`);
      clearForm();
      modal.classList.remove("show");
    }
  });
  function clearForm() {
    inputLogin.value = "";
    inputPassword.value = "";
  }
  function clearErr() {
    inputLogin.classList.remove("error");
    inputPassword.classList.remove("error");
  }
});
