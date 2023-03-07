$(document).ready(function () {
  var professor = {
    username: "admin",
    courses: [
      { name: "HAHA 1", description: "Course", subject: "math" },
      { name: "HAHA 2", description: "Course", subject: "math" },
      { name: "HAHA 3", description: "Course", subject: "math" },
    ],
  };
  //   window.users.find(function (user) {
  //     return user.username === window.localStorage.getItem("professor");
  //   });
  var $title = $(`<h1>Welcome to ${professor.username}'s profile </h1>`);
  $("body").prepend($title);
  var $courseList = $("<ul id='courses'></ul>");
  for (var i = 0; i < professor.courses.length; i++) {
    var $content = $(
      `<div class='course'><li>${professor.courses[i].name} </li></div>`
    );
    $($content).append(
      $(`<span>${professor.courses[i].description}</span><br />`)
    );
    $($content).append($(`<span>${professor.courses[i].subject}</span>`));
    $($courseList).append($content);
  }

  $("#container").append($courseList);
});
