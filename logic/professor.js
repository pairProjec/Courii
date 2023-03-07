//  var professor = window.users.find(function (user) {
//     return user.username === window.localStorage.getItem("professor");
//   });

$(document).ready(function () {
  var professor = {
    username: "admin",
    courses: [
      { name: "HAHA 1", description: "Course", subject: "math" },
      { name: "HAHA 2", description: "Course", subject: "math" },
      { name: "HAHA 3", description: "Course", subject: "math" },
    ],
  };

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

$("#add").click(function (e) {
  e.preventDefault();
  var isOnline = $('input[name="online"]:checked').val();
  var professor = {
    username: "admin",
    courses: [
      { name: "HAHA 1", description: "Course", subject: "math" },
      { name: "HAHA 2", description: "Course", subject: "math" },
      { name: "HAHA 3", description: "Course", subject: "math" },
    ],
  };

  var newCourse = {
    name: $("#name").val(),
    professor: professor.username,
    level: $("#level").val(),
    subject: $("#subject").val(),
    description: $("#desc").val(),
    isOnline: isOnline === "online",
  };

  window.courses.push(newCourse);
  window.users[window.users.indexOf(professor)].courses.push(newCourse);
});
