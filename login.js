document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const remember = document.getElementById("remember").checked;
  const errorLabel = document.getElementById("error");

  // Check rỗng
  if (!username || !password) {
    errorLabel.textContent = "Điền đầy đủ username và password";
    errorLabel.style.display = "block";
    return;
  }

  // Check Unicode
  const unicodeRegex = /[^\u0000-\u007F]+/;
  if (unicodeRegex.test(username)) {
    errorLabel.textContent = "Username không được dùng kí tự unicode";
    errorLabel.style.display = "block";
    return;
  }
  if (unicodeRegex.test(password)) {
    errorLabel.textContent = "Password không được dùng kí tự unicode";
    errorLabel.style.display = "block";
    return;
  }

  // Giả lập xác thực
  if (username === "admin" && password === "123456") {
    if (remember) {
      localStorage.setItem("token", "fake_jwt_token");
    } else {
      sessionStorage.setItem("token", "fake_jwt_token");
    }
    window.location.href = "/home";
  } else {
    errorLabel.textContent = "Sai thông tin đăng nhập";
    errorLabel.style.display = "block";
  }
});
