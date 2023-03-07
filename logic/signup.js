$("form").submit(function (event) {
  //By default, submitting a form refreshes the page
  event.preventDefault();

  //Is the new user a student or a professor?
  var isProf = $('input[name="role"]:checked').val();

  //Checking if the username is taken
  var usernameTaken = window.users.find(function (user) {
    return $("#username").val() == user.username;
  });

  //Sign up check
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

//Redirect to login page
$("#signin").click(function (event) {
  event.preventDefault();
  window.location.assign("../pages/home.html");
});
