const registerForm = document.querySelector(".form");

function handleRegister(e) {
  // get form data

  e.preventDefault();

  const name = document.querySelector("#name").value;
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  // store form data in local storage

  const userData = {
    email,
    password,
    name,
  };

  const JsonData = JSON.stringify(userData);

  localStorage.setItem("userData", JsonData);

  // redirect to login page

  location.href = "../html/login.html";
}

registerForm.addEventListener("submit", handleRegister);
