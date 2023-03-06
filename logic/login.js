$("form").submit(function (event) {
  event.preventDefault();
  var userFound = window.users.find(function (user) {
    return user.username === $("#username").val();
  });
  if (userFound) {
    if (userFound.password === $("#pass").val()) {
      alert("Successfully logged in");
      window.localStorage.setItem("user", userFound.username);
      window.location.assign("../pages/levels.html");
    } else {
      alert("Incorrect password");
      $("#pass").val("");
    }
  } else {
    $("#username").val("");
    alert("Please make sure you entered a valid username");
  }
});

$("#register").click(function (event) {
  event.preventDefault();
  window.location.assign("../pages/signup.html");
});
