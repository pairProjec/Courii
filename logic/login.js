$("form").submit(function (event) {
  //By default, submitting a form refreshes the page
  event.preventDefault();

  //Checking if the user exists
  var userFound = window.users.find(function (user) {
    return user.username === $("#username").val();
  });

  //Login authentication
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

//Redirect to sign up page
$("#register").click(function (event) {
  event.preventDefault();
  window.location.assign("../pages/signup.html");
});
