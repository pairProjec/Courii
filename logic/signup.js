$("form").submit(function (event) {
  event.preventDefault();
  var isProf = $('input[name="role"]:checked').val();
  var usernameTaken = window.users.find(function (user) {
    return $("#username").val() == user.username;
  });
  if (usernameTaken) {
    alert("Please enter a different username");
  } else {
    if (
      $("#pass").val() === $("#confirm-password").val() ||
      $("#pass").val().length > 6
    ) {
      var newUser = {
        username: $("#username").val(),
        password: $("#pass").val(),
        isProfessor: isProf === "professor",
        courses: [],
      };
      window.users.push(newUser);
      window.localStorage.setItem("user", $("#username").val());
      window.location.assign("../pages/levels.html");
    } else {
      alert(
        "Please make sure your password is longer than 6 characters and is identical to the 'Confirm Password' field"
      );
    }
  }
});

$("#signin").click(function (event) {
  event.preventDefault();
  window.location.assign("../pages/home.html");
});
