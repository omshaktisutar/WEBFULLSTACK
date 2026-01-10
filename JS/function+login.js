function login(username, password) {
  if (username === "admin" && password === "1234") {
    return "Login Successful ✅";
  } else {
    return "Invalid Credentials ❌";
  }
}

console.log(login("admin", "1234"));
console.log(login("user", "0000"));
