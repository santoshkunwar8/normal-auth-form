const formElm = document.querySelector(".form");

function handleLogin(e) {
  e.preventDefault();

  const storage = localStorage.getItem("userData");

  if (!storage) {
    alert("Please Register First");
    return;
  }

  const userData = JSON.parse(storage);

  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;

  if (email !== userData.email) {
    alert("Invalid email");
    return;
  }

  if (password !== userData.password) {
    alert("Invalid password");
    return;
  }

  alert("Login Successful");

  location.href = "../html/dashboard.html";
}

formElm.addEventListener("submit", handleLogin);
