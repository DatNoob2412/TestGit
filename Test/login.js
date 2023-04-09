function login(username, password) {
  if (username === "admin" && password === "password") {
    return "success";
  } else {
    return "failure";
  }
}

module.exports = login;